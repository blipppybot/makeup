// src/components/ProductCard.jsx
export default function ProductCard({
  brand,
  description,

  image = {
    src: null,
    alt: "",
  },

  supplementary,
  showSupplementary = false,

  showDinkus = false,
  showSecondaryLabel = false,
  showLabelPrimary = true,
  showRating = true,

  rating,
  labelPrimary,
  labelSecondary,

  pricing = {
    type: "default", // default | promotion | sisterClub | onePass
    was: null,
    now: null,
  },
}) {
const pricingConfig = {
  default: {
    labels: { was: "Was", now: "Now" },
    nowClass: "text-black",
  },
  promotion: {
    labels: { was: "Was", now: "Now" },
    nowClass: "text-gray-500",
  },
  sisterClub: {
    labels: { was: "Regular", now: "Sister Club" },
    nowClass: "text-pink-600",
  },
  onePass: {
    labels: { was: "Regular", now: "OnePass" },
    nowClass: "text-purple-600",
  },
};

const config = pricingConfig[pricing?.type] || pricingConfig.default;

  return (
    <div className="w-full bg-white p-3 pb-6 font-poppins flex flex-col h-full">

      {/* IMAGE SECTION */}
      <div className="relative">
        <div className="relative aspect-square bg-slate-100">
          {image?.src ? (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-slate-100" />
          )}
        </div>

        {showDinkus && (
          <div className="absolute top-0 left-0 w-12 h-12">
            <img
              src="dinkus_rgb_2for25.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {showSecondaryLabel && labelSecondary && (
          <div className="absolute top-0 right-0 text-xs font-medium bg-slate-50 text-gray-800 px-2 py-1 rounded">
            {labelSecondary}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">

        <div className="">
        {/* TEXT BLOCK */}
        <div className="space-y-0.5 pb-1.5 tracking-tight">
          {brand && (
            <p className="text-xs font-semibold text-gray-800 text-left">
              {brand}
            </p>
          )}

          {description && (
            <p className="text-base text-gray-900 text-left leading-5 line-clamp-2">
              {description}
            </p>
          )}

          {showSupplementary && supplementary && (
            <p className="text-xs text-gray-500 text-left">
              {supplementary}
            </p>
            )}
        </div>


        {/* LABEL + RATING ROW */}
{(showLabelPrimary && labelPrimary) || (showRating && rating) ? (
  <div className="flex items-center pb-3">
      {showLabelPrimary && labelPrimary && (
        <span className="text-xs font-medium bg-black text-white px-2 py-1 rounded">
          {labelPrimary}
        </span>
      )}

      {showRating && rating && (
        <div className="ml-auto flex items-center gap-1 text-xs">
          <span>{rating}</span>
          <span><svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6.3645 0.599947L8.0375 3.91445L11.2575 4.23345C11.3342 4.23982 11.4074 4.26802 11.4685 4.31471C11.5296 4.36141 11.5761 4.42464 11.6024 4.49692C11.6287 4.56921 11.6337 4.64751 11.6169 4.72257C11.6001 4.79763 11.5621 4.8663 11.5075 4.92045L8.8575 7.54695L9.84 11.1159C9.8601 11.1916 9.85791 11.2715 9.83368 11.346C9.80945 11.4205 9.76421 11.4864 9.70342 11.5358C9.64263 11.5852 9.56886 11.6159 9.49099 11.6244C9.41313 11.6329 9.33447 11.6186 9.2645 11.5834L6 9.96695L2.74 11.5814C2.67002 11.6166 2.59137 11.6309 2.5135 11.6224C2.43564 11.6139 2.36187 11.5832 2.30108 11.5338C2.24028 11.4844 2.19505 11.4185 2.17082 11.344C2.14659 11.2695 2.1444 11.1896 2.1645 11.1139L3.147 7.54495L0.494999 4.91845C0.440365 4.8643 0.40239 4.79563 0.385571 4.72057C0.368752 4.64551 0.373793 4.56721 0.400097 4.49492C0.426401 4.42264 0.472866 4.35941 0.533992 4.31271C0.595117 4.26602 0.668343 4.23782 0.744999 4.23145L3.965 3.91245L5.6355 0.599947C5.66985 0.532847 5.72207 0.476533 5.78638 0.437208C5.85069 0.397884 5.92462 0.377075 6 0.377075C6.07538 0.377075 6.1493 0.397884 6.21362 0.437208C6.27793 0.476533 6.33014 0.532847 6.3645 0.599947Z"
                    fill="black"
                  />
                </svg></span>
        </div>
      )}
    </div>
  ) : null}
        </div>

<div className="mt-auto space-y-3">
        {/* PRICING */}
        {pricing.type === "default" && pricing.now && (
          <div className="pb-1">
            <p className={`h-9 flex items-end justify-end text-base font-semibold text-right leading-5 tracking-tight ${config.nowClass}`}>
              ${pricing.now}
            </p>
          </div>
        )}

        {pricing.type !== "default" && (pricing.was || pricing.now) && (
          <div className="flex justify-between pb-1">
            {pricing.was && (
              <div>
                <p className="text-xs text-gray-500 text-left">
                  {config.labels.was}
                </p>
                <p className="text-base font-semibold text-stone-600 leading-5 tracking-tight line-through">
                  ${pricing.was}
                </p>
              </div>
            )}

            {pricing.now && (
              <div>
                <p className={`text-xs text-right ${config.nowClass}`}>
                    {config.labels.now}
                </p>
                 <p className="text-base font-semibold leading-5 tracking-tight text-right">
                    ${pricing.now}
                  </p>
              </div>
            )}
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex gap-2">
          <button className="w-11 h-11 border border-pink-600 bg-transparent rounded-lg inline-flex items-center justify-center hover:border-pink-700 focus:ring-4 focus:ring-red-100 rounded-base focus:outline-none">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M10.749 2.21582C11.225 2.06222 11.731 2.0244 12.2246 2.10449C12.7182 2.18463 13.186 2.38055 13.5889 2.67676C13.9918 2.97302 14.3183 3.36126 14.542 3.80859C14.8382 4.40112 14.941 5.07167 14.835 5.72559C14.7421 6.29792 14.4937 6.83201 14.1191 7.27051L13.9512 7.45215L13.9424 7.46191L8 13.6592L2.05957 7.46387L2.05078 7.4541L1.88184 7.27246C1.50694 6.83393 1.25893 6.29917 1.16602 5.72656C1.05988 5.07228 1.16232 4.40133 1.45898 3.80859C1.68269 3.36131 2.00919 2.97301 2.41211 2.67676C2.81497 2.38059 3.28282 2.18465 3.77637 2.10449C4.26996 2.02441 4.77607 2.06227 5.25195 2.21582C5.72795 2.36948 6.16094 2.63461 6.51465 2.98828L7.55859 4.03125C7.80264 4.27514 8.19834 4.27514 8.44238 4.03125L9.48633 2.98828C9.84003 2.63461 10.273 2.36948 10.749 2.21582Z"
                stroke="#E01884"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button className="flex-1 h-11 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 text-sm text-white font-medium shadow-xl hover:border-pink-700 focus:ring-4 focus:ring-red-100 rounded-base focus:outline-none">
            Add
          </button>
        </div>
</div>
      </div>
    </div>
  );
}