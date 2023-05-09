// в функцию надо передать рейтинг из бекнеда в виде дробного числа

export default function renderRating(backendRating, element) {
    const starRating = backendRating / 2; 
    const ratingArr = [];
    if (element === "card") {
        for (let i = 1; i <= 5; i++) {
        if (i <= starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <svg class="card__rate--img" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4687 22.4997C18.3109 22.5004 18.1568 22.4511 18.0286 22.3591L12 17.9885L5.97139 22.3591C5.84259 22.4525 5.68742 22.5026 5.52832 22.502C5.36921 22.5014 5.21441 22.4502 5.08629 22.3559C4.95818 22.2615 4.86339 22.1289 4.81563 21.9771C4.76787 21.8254 4.76961 21.6623 4.82061 21.5116L7.17186 14.5474L1.07811 10.3685C0.946113 10.2781 0.846491 10.1478 0.793797 9.99675C0.741103 9.84568 0.7381 9.68172 0.785225 9.52883C0.83235 9.37593 0.927135 9.24211 1.05573 9.14692C1.18432 9.05173 1.33999 9.00016 1.49998 8.99974H9.0178L11.2865 2.01771C11.3354 1.86697 11.4308 1.73558 11.559 1.6424C11.6871 1.54922 11.8415 1.49902 12 1.49902C12.1584 1.49902 12.3128 1.54922 12.441 1.6424C12.5692 1.73558 12.6645 1.86697 12.7134 2.01771L14.9822 9.00208H22.5C22.6602 9.00201 22.8162 9.05322 22.9452 9.14823C23.0741 9.24323 23.1693 9.37704 23.2167 9.53006C23.2642 9.68307 23.2613 9.84724 23.2087 9.99854C23.1561 10.1498 23.0564 10.2803 22.9242 10.3708L16.8281 14.5474L19.178 21.5097C19.216 21.6225 19.2267 21.7426 19.2092 21.8603C19.1917 21.978 19.1464 22.0898 19.0771 22.1865C19.0078 22.2832 18.9165 22.3621 18.8107 22.4165C18.7049 22.471 18.5877 22.4995 18.4687 22.4997Z" fill="url(#paint0_linear_148_6920)"/>
                        <defs>
                        <linearGradient id="paint0_linear_148_6920" x1="3.5" y1="2.99976" x2="18.5" y2="22.9998" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119"/>
                        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                        </linearGradient>
                        </defs>
                        </svg>
                </li>`)
        } else if (i === Math.ceil(starRating) && starRating % 1 !== 0) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <svg class="card__rate--img" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_7005)" stroke-linejoin="round"/>
                    <path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_7005)"/>
                    <defs>
                    <linearGradient id="paint0_linear_148_7005" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F84119"/>
                    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_148_7005" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F84119"/>
                    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </li>`)
        } else if (i > starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <svg class="card__rate--img" width="14" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 6.3125H10.8281L9 0.6875L7.17188 6.3125H1.125L6.04688 9.6875L4.14844 15.3125L9 11.7969L13.8516 15.3125L11.9531 9.6875L16.875 6.3125Z" stroke="url(#paint0_linear_148_6995)" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_148_6995" x1="3.04877" y1="1.73251" x2="13.478" y2="15.7124" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F84119"/>
                    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </li>`)
        
        }
        } 
    } else if (element === "hero") {
   for (let i = 1; i <= 5; i++) {
        if (i <= starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <svg class="card__rate--img-hero" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4687 22.4997C18.3109 22.5004 18.1568 22.4511 18.0286 22.3591L12 17.9885L5.97139 22.3591C5.84259 22.4525 5.68742 22.5026 5.52832 22.502C5.36921 22.5014 5.21441 22.4502 5.08629 22.3559C4.95818 22.2615 4.86339 22.1289 4.81563 21.9771C4.76787 21.8254 4.76961 21.6623 4.82061 21.5116L7.17186 14.5474L1.07811 10.3685C0.946113 10.2781 0.846491 10.1478 0.793797 9.99675C0.741103 9.84568 0.7381 9.68172 0.785225 9.52883C0.83235 9.37593 0.927135 9.24211 1.05573 9.14692C1.18432 9.05173 1.33999 9.00016 1.49998 8.99974H9.0178L11.2865 2.01771C11.3354 1.86697 11.4308 1.73558 11.559 1.6424C11.6871 1.54922 11.8415 1.49902 12 1.49902C12.1584 1.49902 12.3128 1.54922 12.441 1.6424C12.5692 1.73558 12.6645 1.86697 12.7134 2.01771L14.9822 9.00208H22.5C22.6602 9.00201 22.8162 9.05322 22.9452 9.14823C23.0741 9.24323 23.1693 9.37704 23.2167 9.53006C23.2642 9.68307 23.2613 9.84724 23.2087 9.99854C23.1561 10.1498 23.0564 10.2803 22.9242 10.3708L16.8281 14.5474L19.178 21.5097C19.216 21.6225 19.2267 21.7426 19.2092 21.8603C19.1917 21.978 19.1464 22.0898 19.0771 22.1865C19.0078 22.2832 18.9165 22.3621 18.8107 22.4165C18.7049 22.471 18.5877 22.4995 18.4687 22.4997Z" fill="url(#paint0_linear_148_6920)"/>
                        <defs>
                        <linearGradient id="paint0_linear_148_6920" x1="3.5" y1="2.99976" x2="18.5" y2="22.9998" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F84119"/>
                        <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                        </linearGradient>
                        </defs>
                        </svg>
                </li>`)
        } else if (i === Math.ceil(starRating) && starRating % 1 !== 0) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <svg class="card__rate--img-hero" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_7005)" stroke-linejoin="round"/>
                    <path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_7005)"/>
                    <defs>
                    <linearGradient id="paint0_linear_148_7005" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F84119"/>
                    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_148_7005" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F84119"/>
                    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </li>`)
        } else if (i > starRating) {
            ratingArr.push(
                `<li class="card__rate--item">
                    <svg class="card__rate--img-hero" width="14" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 6.3125H10.8281L9 0.6875L7.17188 6.3125H1.125L6.04688 9.6875L4.14844 15.3125L9 11.7969L13.8516 15.3125L11.9531 9.6875L16.875 6.3125Z" stroke="url(#paint0_linear_148_6995)" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_148_6995" x1="3.04877" y1="1.73251" x2="13.478" y2="15.7124" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F84119"/>
                    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </li>`)
        
        }
        }
    }
    return ratingArr.join(" ");
}