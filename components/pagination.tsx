interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = [1, 2, 3, "...", 8, 9, 10]; 

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex gap-2">
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-colors ${
              currentPage === page
                ? "bg-[#CB9E4B]  font-bold"
                : "text-white hover:bg-white/10"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button 
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#b38a3d] transition-colors"
      >
        Next <span>→</span>
      </button>
    </div>
  );
}