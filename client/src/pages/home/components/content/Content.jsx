import { useEffect, useState } from "react";

import Cards from "./components/cards/Cards";
import PaginationBar from "./components/paginationBar/PaginationBar";

import "./content.scss";

function Content({ countries }) {
	/** -------------- Pagination Logic*/
	const [countriesPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

	const numberOfPages = [];
	const pagesRequired = Math.ceil(countries.length / countriesPerPage);
	for (let i = 1; i <= pagesRequired; i++) {
		numberOfPages.push(i);
	}

	const firstCountryOnNextPage = currentPage * countriesPerPage;
	const firstCountryOnActualPage = firstCountryOnNextPage - countriesPerPage;
	const currentCountriesOnActualPage = countries.slice(
		firstCountryOnActualPage,
		firstCountryOnNextPage,
	);

	const [pageNumbersLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

	const setActualPage = (page) => {
		if (typeof page === "number") {
			setCurrentPage(page);
		} else if (page === "prev") {
			setCurrentPage(currentPage - 1);
			if ((currentPage - 1) % pageNumbersLimit === 0) {
				setMinPageNumberLimit(minPageNumberLimit - pageNumbersLimit);
				setMaxPageNumberLimit(maxPageNumberLimit - pageNumbersLimit);
			}
		} else if (page === "next") {
			setCurrentPage(currentPage + 1);
			if (currentPage + 1 > maxPageNumberLimit) {
				setMinPageNumberLimit(minPageNumberLimit + pageNumbersLimit);
				setMaxPageNumberLimit(maxPageNumberLimit + pageNumbersLimit);
			}
		}
	};
	/** -------------- Finished */

	useEffect(() => {
		setCurrentPage(1);
		setMinPageNumberLimit(0);
		setMaxPageNumberLimit(5);
	}, [countries]);

	useEffect(() => {
		window.scroll(0, 0);
	}, [currentPage]);

	return (
		<div className="content__container">
			<PaginationBar
				currentPage={currentPage}
				setPage={setActualPage}
				pages={numberOfPages}
				maxLimit={maxPageNumberLimit}
				minLimit={minPageNumberLimit}
			/>
			<Cards countries={currentCountriesOnActualPage} />
			<PaginationBar
				currentPage={currentPage}
				setPage={setActualPage}
				pages={numberOfPages}
				maxLimit={maxPageNumberLimit}
				minLimit={minPageNumberLimit}
			/>
		</div>
	);
}

export default Content;
