import React from "react";
import "./paginationBar.scss";

function PaginationBar({ currentPage, setPage, pages, maxLimit, minLimit }) {
	return (
		<div className="pagination__container">
			{pages.length < 2 ? (
				""
			) : (
				<button
					className={
						currentPage === 1
							? "pagination__container__button--disabled"
							: "pagination__container__button--prev"
					}
					disabled={currentPage === 1 && true}
					onClick={() => setPage("prev")}
				>
					Prev
				</button>
			)}

			<div className="pagination__container__numbers">
				{pages.length > 1 &&
					pages.map((number) => {
						if (number < maxLimit + 1 && number > minLimit) {
							return (
								<button
									key={number}
									onClick={() => setPage(number)}
									className={
										currentPage === number
											? "pagination__container__numbers--active"
											: "pagination__container__numbers__eachOne"
									}
								>
									{number}
								</button>
							);
						} else {
							return null;
						}
					})}
			</div>

			{pages.length > 1 && (
				<button
					className={
						currentPage === pages.length
							? "pagination__container__button--disabled"
							: "pagination__container__button--next"
					}
					disabled={currentPage === pages.length && true}
					onClick={() => setPage("next")}
				>
					Next
				</button>
			)}
		</div>
	);
}

export default PaginationBar;
