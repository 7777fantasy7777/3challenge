import { useState, useEffect, useRef, useMemo } from "react";
import { Star, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import reviewDataRaw from "../../review.json?raw";

interface Review {
  id: string;
  username: string;
  avatar?: string;
  initials: string;
  rating: number;
  text: string;
  purchaseContext: string;
  timeAgo: string;
}

interface RawReview {
  id: string;
  description: string;
  stars: number;
  createdAt: number;
  joinedAt: number;
  user: {
    name: string | null;
    username: string;
    profilePicSrcset?: {
      original?: string;
    };
  };
}

// Utility functions
const generateInitials = (name: string | null, username: string): string => {
  if (name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  if (username.length >= 2) {
    return username.substring(0, 2).toUpperCase();
  }
  return username.toUpperCase().padEnd(2, username[0] || "U");
};

const formatTimeAgo = (timestamp: number): string => {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  const days = Math.floor(diff / 86400);
  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor(diff / 60);

  if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
  if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  return "Just now";
};

const formatPurchaseContext = (createdAt: number, joinedAt: number): string => {
  const createdDate = new Date(createdAt * 1000);
  const joinedDate = new Date(joinedAt * 1000);
  const diffMs = createdDate.getTime() - joinedDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const formattedDate = `${monthNames[createdDate.getMonth()]} ${createdDate.getDate()}, ${createdDate.getFullYear()}`;

  let timeAfterPurchase = "";
  if (diffYears > 0) {
    timeAfterPurchase = `${diffYears} ${diffYears === 1 ? "year" : "years"} after purchase`;
  } else if (diffMonths > 0) {
    timeAfterPurchase = `${diffMonths} ${diffMonths === 1 ? "month" : "months"} after purchase`;
  } else if (diffDays > 0) {
    timeAfterPurchase = `${diffDays} ${diffDays === 1 ? "day" : "days"} after purchase`;
  } else {
    timeAfterPurchase = "on the day of purchase";
  }

  return `Written ${formattedDate}, ${timeAfterPurchase}`;
};

const getDisplayName = (name: string | null, username: string): string => {
  return name || username;
};

// Parse and transform review data
const parseReviews = (rawData: string): Review[] => {
  try {
    // The file is now in standard JSON format: { "totalCount": number, "reviews": [...] }
    const parsed = JSON.parse(rawData);
    
    // Extract reviews array
    const reviewsArray = parsed?.reviews || [];
    
    if (!Array.isArray(reviewsArray)) {
      console.error("Reviews array is not an array:", reviewsArray);
      return [];
    }
    
    console.log(`Successfully parsed ${reviewsArray.length} reviews`);
    
    return reviewsArray.map((raw: RawReview) => {
      const displayName = getDisplayName(raw.user.name, raw.user.username);
      const initials = generateInitials(raw.user.name, raw.user.username);
      const avatar = raw.user.profilePicSrcset?.original;
      
      return {
        id: raw.id,
        username: displayName,
        avatar,
        initials,
        rating: raw.stars,
        text: raw.description,
        purchaseContext: formatPurchaseContext(raw.createdAt, raw.joinedAt),
        timeAgo: formatTimeAgo(raw.createdAt),
      };
    });
  } catch (error) {
    console.error("Error parsing reviews:", error);
    return [];
  }
};



const StarIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#ffc53d] text-[#ffc53d]"
    >
      <path color="#ffc53d" d="M15.1881 6.61154C15.0381 6.14454 14.6411 5.81655 14.1561 5.75455L10.6541 5.29456L9.1331 2.12854C8.9221 1.69054 8.4881 1.41754 8.0001 1.41754C7.5121 1.41754 7.07811 1.68954 6.86711 2.12854L5.3461 5.29456L1.8461 5.75354C1.3591 5.81654 0.962099 6.14554 0.812099 6.61154C0.661099 7.07654 0.789099 7.57455 1.1451 7.90955L3.70311 10.3195L3.0601 13.7655C2.9711 14.2445 3.1611 14.7196 3.5541 15.0066C3.9501 15.2946 4.4631 15.3295 4.8921 15.0975L8.0001 13.4215L11.1081 15.0975C11.2971 15.1995 11.5021 15.2495 11.7061 15.2495C11.9671 15.2495 12.2251 15.1676 12.4461 15.0066C12.8401 14.7196 13.0291 14.2436 12.9401 13.7646L12.2971 10.3195L14.8541 7.91055C15.2111 7.57455 15.3391 7.07654 15.1881 6.61154Z" fill="currentColor" />
    </svg>
  );
};

const SmallStarIcon = ({ size = 14 }: { size?: number }) => {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#ffc53d] text-[#ffc53d]"
    >
      <path d="M11.5701 4.65201C11.4341 4.23301 11.0781 3.93701 10.6411 3.88101L8.11608 3.54901L7.01809 1.267C6.82909 0.870998 6.43907 0.625 5.99907 0.625C5.55907 0.625 5.17108 0.870015 4.98108 1.26501L3.88209 3.54901L1.35908 3.88C0.921075 3.937 0.564075 4.233 0.428075 4.651C0.293075 5.069 0.407078 5.51602 0.728078 5.81802L2.57209 7.556L2.10907 10.041C2.03007 10.471 2.20008 10.897 2.55208 11.155C2.90708 11.414 3.36808 11.446 3.75608 11.238L5.99808 10.03L8.24209 11.239C8.41109 11.33 8.59507 11.375 8.77707 11.375C9.01107 11.375 9.24508 11.301 9.44408 11.155C9.79708 10.897 9.96607 10.47 9.88707 10.039L9.42408 7.556L11.2671 5.81802C11.5881 5.51602 11.7031 5.069 11.5681 4.651L11.5701 4.65201Z" fill="currentColor" />
    </svg>
  );
};

const RatingBar = ({ stars, percentage }: { stars: number; percentage: number }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-foreground w-[40px]">{stars} {stars === 1 ? "star" : "stars"}</span>
      <div className="flex-1 h-2 bg-secondary dark:bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-[#E8B337] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${percentage}% of reviews are ${stars} stars`}
        />
      </div>
    </div>
  );
};

const ReviewsModal = ({ 
  open, 
  onOpenChange,
  allReviews,
  totalReviews,
  overallRating
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  allReviews: Review[];
  totalReviews: number;
  overallRating: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<number | "all">("all");
  const scrollableRef = useRef<HTMLDivElement>(null);
  const reviewsPerPage = 10;
  
  // Filter reviews by rating
  const filteredReviews = selectedFilter === "all" 
    ? allReviews 
    : allReviews.filter(r => r.rating === selectedFilter);
  
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  
  // Reset to page 1 when modal opens or filter changes
  useEffect(() => {
    if (open) {
      setCurrentPage(1);
    }
  }, [open, selectedFilter]);
  
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);

  const scrollToTop = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(scrollToTop, 0);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(scrollToTop, 0);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] bg-popover border-border text-popover-foreground p-0 flex flex-col rounded-lg shadow-2xl overflow-hidden gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border bg-card relative">
          <div className="flex items-center justify-center relative">
            <DialogTitle className="text-2xl font-semibold text-foreground text-center">Reviews</DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity text-foreground"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>
        </DialogHeader>
        
        {/* Overall Rating Section */}
        <div className="px-6 pt-6 pb-4 border-b border-border bg-card flex justify-center items-center flex-col">
          <div className="text-xs text-muted-foreground mb-2">Overall rating</div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold">
              {overallRating.toFixed(1)}
            </span>
            <div className="flex items-center gap-1">
              {[...Array(Math.round(overallRating || 0))].map((_, i) => (
                <StarIcon key={i} size={18} />
              ))}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {totalReviews.toLocaleString()} ratings & reviews
          </div>
        </div>

        {/* Filter Chips */}
        <div className="px-6 py-4 border-b border-border bg-card flex flex-wrap gap-2">
          {(["all", 5, 4, 3, 2, 1] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter === "all" ? (
                "All"
              ) : (
                <span className="flex items-center gap-1">
                  <SmallStarIcon />
                  {filter} stars
                </span>
              )}
            </button>
          ))}
        </div>
        
        <div ref={scrollableRef} className="flex-1 overflow-y-auto px-6 py-4 bg-popover scrollbar-gutter-stable scrollbar-dark">
          <ul className="flex flex-col">
            {currentReviews.length > 0 ? (
              currentReviews.map((review, index) => (
                <li key={review.id} className="flex min-w-0 flex-col">
                  <div className="mb-4 flex items-start gap-3">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold text-sm">
                          {review.initials}
                        </div>
                      )}
                    </div>

                    {/* Username and Stars */}
                    <div className="flex min-w-0 flex-col gap-0.5 flex-1">
                      <span className="text-base font-semibold text-foreground">
                        {review.username}
                      </span>
                      <span className="text-[#E8B337] flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <SmallStarIcon key={i} />
                        ))}
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="mb-3">
                    <p className="text-base text-foreground font-normal leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  {/* Purchase Context */}
                  <div className="mb-6">
                    <span className="text-xs text-muted-foreground font-medium">
                      {review.purchaseContext}
                    </span>
                  </div>

                  {/* Divider Line */}
                  {index < currentReviews.length - 1 && (
                    <div className="mb-6 h-px bg-border w-full" />
                  )}
                </li>
              ))
            ) : (
              <li className="text-center text-muted-foreground py-8">No reviews found for this filter.</li>
            )}
          </ul>
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-border bg-card flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            {/* <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span> */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

const ReviewsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Parse reviews directly from imported file
  const allReviews = useMemo(() => {
    console.log("📦 reviewDataRaw length:", reviewDataRaw?.length || 0);
    console.log("📦 reviewDataRaw first 200 chars:", reviewDataRaw?.substring(0, 200));
    
    try {
      const parsed = parseReviews(reviewDataRaw);
      console.log("✅ Parsed reviews count:", parsed.length);
      if (parsed.length > 0) {
        console.log("✅ First review:", parsed[0]);
      }
      return parsed;
    } catch (error) {
      console.error("❌ Error parsing reviews:", error);
      return [];
    }
  }, []);
  
  const isLoading = false;
  
  // Use all reviews except 1-star to keep things realistic but positive
  const displayReviews = useMemo(() => {
    return allReviews.filter((r) => r.rating !== 1);
  }, [allReviews]);
  
  // Calculate rating stats from displayable reviews (5–2 stars, plus empty 1-star bar)
  const ratingStats = useMemo(() => {
    if (displayReviews.length === 0) {
      return {
        overallRating: 0,
        totalReviews: 0,
        distribution: [5, 4, 3, 2, 1].map((stars) => ({ stars, percentage: 0 })),
      };
    }

    const totalReviews = displayReviews.length;

    const distribution = [5, 4, 3, 2, 1].map((stars) => {
      const count = displayReviews.filter((r) => r.rating === stars).length;
      const percentage = (count / totalReviews) * 100;
      return { stars, percentage };
    });

    const overallRating =
      displayReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

    return {
      overallRating,
      totalReviews,
      distribution,
    };
  }, [displayReviews]);

  const ratingDistribution = ratingStats.distribution;
  const overallRating = ratingStats.overallRating;
  const totalReviews = ratingStats.totalReviews;
  
  // Show first 4 reviews from the filtered set
  const reviews = displayReviews.slice(0, 4);

  console.log("🎯 Reviews to display:", reviews.length, reviews);

  return (
    <>
      <section 
        id="reviews"
        className="scroll-mt-10 border-b border-border py-20 px-6 lg:px-16 xl:px-20 bg-background text-foreground"
      >
        <div className="max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.23fr_0.77fr] gap-12 lg:gap-[10rem]">
            {/* Left Column - Rating Summary */}
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Reviews</h2>
              
              {/* Overall Rating - YELLOW STARS */}
              <div className="flex items-baseline gap-2">
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`${overallRating.toFixed(1)} out of 5 stars`}
                >
                  {[...Array(Math.round(overallRating || 0))].map((_, i) => (
                    <StarIcon key={i} size={16} />
                  ))}
                </div>
                <span className="text-base font-medium text-foreground">
                  {overallRating.toFixed(1)} out of 5
                </span>
              </div>
              
              {/* Total Reviews */}
              <p className="text-sm text-muted-foreground">{totalReviews.toLocaleString()} total reviews</p>
              
              {/* Rating Distribution */}
              <div className="space-y-0 pt-2">
                {ratingDistribution.map((item) => (
                  <RatingBar key={item.stars} stars={item.stars} percentage={item.percentage} />
                ))}
              </div>
            </div>

            {/* Right Column - Reviews List */}
            <div className="flex w-full min-w-0 flex-col">
              {isLoading ? (
                <div className="text-gray-400 py-8">Loading reviews...</div>
              ) : reviews.length === 0 ? (
                <div className="text-muted-foreground py-8">No reviews available</div>
              ) : (
                <ul className="flex flex-col">
                  {reviews.map((review, index) => (
                  <li key={review.id} className="flex min-w-0 flex-col">
                    <div className="mb-4 flex items-start gap-3">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt={review.username}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold text-sm">
                            {review.initials}
                          </div>
                        )}
                      </div>

                      {/* Username and Stars */}
                      <div className="flex min-w-0 flex-col gap-0.5 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-base font-semibold text-foreground">
                            {review.username}
                          </span>
                          <span className="text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                            {review.timeAgo}
                          </span>
                        </div>
                        <span className="text-[#E8B337] flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <SmallStarIcon key={i} />
                          ))}
                        </span>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="mb-2">
                      <p className="text-base text-foreground font-normal leading-relaxed">
                        {review.text}
                      </p>
                    </div>

                    {/* Purchase Context */}
                    <div className="mb-6">
                      <span className="text-xs text-muted-foreground font-medium">
                        {review.purchaseContext}
                      </span>
                    </div>

                    {/* Divider Line */}
                    {index < reviews.length - 1 && (
                      <div className="mb-6 h-px bg-border w-full" />
                    )}
                  </li>
                  ))}
                </ul>
              )}

              {/* See All Reviews Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="hover:text-primary text-primary mt-8 flex cursor-pointer items-center justify-center gap-2 transition-colors"
              >
                <span className="text-base font-medium text-[#88b5ff]">See all reviews</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ReviewsModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        allReviews={displayReviews}
        totalReviews={totalReviews}
        overallRating={overallRating}
      />
    </>
  );
};

export default ReviewsSection;
