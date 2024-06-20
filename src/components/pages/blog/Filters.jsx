import React from "react";

const Filters = ({
  onStartDateHange,
  onEndDateChange,
  onCategoryChange,
  onSortOptionChange,
  categories,
  category,
  sortOption,
  startDate,
  endDate,
}) => {
  return (
    <div className="mt-[100px] p-2 mb-4 max-w-[1000px] w-full mx-auto text-white">
      <div className="font-bold text-lg border-b-2 mb-2 border-[#695b21]">
        Filtry
      </div>

      <div className="flex flex-wrap justify-evenly gap-2">
        <div className="flex flex-col">
          <label>Kategoria</label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Wszystkie</option>

            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Przedział Czasu</label>
          <div className="flex gap-2">
            <input
              type="date"
              value={startDate}
              onChange={(e) => onStartDateHange(e.target.value)}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Sortowanie</label>
          <select
            value={sortOption}
            onChange={(e) => onSortOptionChange(e.target.value)}
          >
            <option value="date_desc">Od najnowszych</option>
            <option value="date_asc">Od najstarszych</option>
            <option value="title_asc">Tytuł A-Z</option>
            <option value="title_desc">Tytuł Z-A</option>
            <option value="comments_desc">Ilość komentarzy malejąco</option>
            <option value="comments_asc">Ilość komentarzy rosnąco</option>
            <option value="likes_desc">Ilość polubień malejąco</option>
            <option value="likes_asc">Ilość polubień rosnąco</option>
            {/* ADD SORTING VALUES, COMMENTS, LIKES ETC. */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
