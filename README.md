[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10211531.svg)](https://doi.org/10.5281/zenodo.14014885)
[![GitHub Release](https://img.shields.io/badge/release-v1.0.1.1-blue)](https://github.com/SE-vrs-organization/slash-ui)
[![Tests](https://github.com/SE-vrs-organization/slash-ui/actions/workflows/build.yaml/badge.svg)](https://github.com/SE-vrs-organization/slash-ui/actions/workflows/build.yaml)
[![Linting](https://github.com/SE-vrs-organization/slash-ui/actions/workflows/linting.yaml/badge.svg)](https://github.com/SE-vrs-organization/slash-ui/actions/workflows/linting.yaml)
[![Coverage Status](https://coveralls.io/repos/github/SE-vrs-organization/slash-ui/badge.svg?branch=main)](https://github.com/SE-vrs-organization/slash-ui/actions/workflows/build.yaml)
[![GitHub license](https://img.shields.io/github/license/SE-vrs-organization/slash-ui)](https://github.com/SE-vrs-organization/slash-ui/blob/main/License.md)
<a href="https://github.com/SE-vrs-organization/slash-ui/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/SE-vrs-organization/slash-ui"></a>
<a href="https://github.com/SE-vrs-organization/slash-ui/issues"><img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/SE-vrs-organization/slash-ui">
<a href="https://github.com/SE-vrs-organization/slash-ui/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/SE-vrs-organization/slash-ui">


```diff
! All the latest changes in slash-phase6 are in "main" branch.
! Score cards (Rubric) are in "Project 2" folder.
```


Do you love shopping? Are you in search of some good deals while shopping online?! Slash is here to help you look for the best deals!


Slash is a publicly accessible web API framework that allows one to scrape the most popular e-commerce websites to get the best deals on the searched items across multiple e-commerce websites. Currently supported websites include [Walmart](https://www.walmart.com/), [Target](https://www.target.com/), [BestBuy](https://www.bestbuy.com/), and [EBay](https://www.ebay.com/).
- **Fast**: With slash, you can save over 50% of your time by comparing deals across websites within seconds
- **Easy**: Slash introduces easy to use public APIs to filter, sort and search through the search results
- **Powerful**: Produces JSON responses that can be easily customised to bring about the desired output

---

<p align="center">
  <a href="#movie_camera-checkout-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#page_facing_up-why">Why</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
  ::
  <a href="#Acknowledgement">Acknowledgement</a>
  ::
  <a href="#email-support">Support</a>
  
</p>

---

:movie_camera: Checkout our video
---

[[https://www.youtube.com/watch?v=ijOOYHe2Ywc]](https://www.youtube.com/watch?v=ijOOYHe2Ywc)


---

:rocket: Installation
---
1. Clone the Github repositories to a desired location on your computer. You will need [git](https://git-scm.com/) to be preinstalled on your machine. Once the repository is cloned, you will then ```cd``` into the local repository.
```
git clone https://github.com/SE-vrs-organization/slash-backend
```
2. After you clone this repo, run npm install to install the dependencies

3. To run this project, 
    - In the project directory, you can run:
        - npm start
    - Runs the app in the development mode.
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    - The page will reload if you make edits.
    - You will also see any lint errors in the console.


:bulb: Use Case of the project
---
* ***Students***: Students coming to university are generally on a budget and time constraint and generally spend hours wasting time to search for products on Websites. Slash is the perfect tool for these students that slashes all the unnecessary details on a website and helps them get prices for a product across multiple websites.Make the most of this tool in the upcoming Black Friday Sale.
* ***Data Analysts***: Finding data for any project is one of the most tedious job for a data analyst, and the datasets found might not be the most recent one. Using slash, they can create their own dataset in real time and format it as per their needs so that they can focus on what is actually inportant.

:page_facing_up: Why
---
- In a market where we are spoilt for choices, we often look for the best deals.  
- The ubiquity of internet access has leveled the retail playing field, making it easy for individuals and businesses to sell products without geographic limitation. In 2020, U.S. e-commerce sales, receiving a boost due to the COVID-19 pandemic, grew 44% and represented more than 21% of total retail sales, according to e-commerce information source Internet Retailer.
- The growth of e-commerce has not only changed the way customers shop, but also their expectations of how brands approach customer service, personalize communications, and provide customers choices.
- E-commerce market has prompted cut throat competition amongst dealers, which is discernable through the price patterns for products of major market players. Price cuts are somewhat of a norm now and getting the best deal for your money can sometimes be a hassle (even while online shopping).
- This is what Slash aims to reduce by giving you an easy to use, all in one place solution for finding the best deals for your products that major market dealers have to offer!
- Slash in its current form is for students who wish to get the best deals out of every e-commerce site and can be used by anyone who is willing to develop an application that consumes these web APIs.
- Future scope includes anything from a web application with a frontend or any Android or IOS application that utilises these Web APIs at their backend. Anyone can build their own custom application on top of these web APIs.

:golf: Phase 6 developments
---

1. **User Interface Revamp**
   - Description: The user interface was completely restructured in React for a more polished, user-centered experience that aids in retaining users.
   - Functionality: 
      - This feature enhances the usability of the search function, allowing users to quickly find products that match their price preferences.
      - Elements like button placements, consistent typography, and cohesive color schemes were used to create an engaging and easy-to-navigate interface.
2. **Microservices architecture**
   - Description: The application was refactored into a microservices architecture, separating different parts of the platform into individual services to improve scalability.
   - Functionality: 
      - Scalable Components: The UI and backend can now scale independently, allowing more efficient resource allocation and reducing downtime.
      - Highlighted Cheapest Product: The microservices architecture enables independent, optimized processing of search and filter results, allowing the cheapest product in each search to be highlighted. This quick visual indicator guides users to the best deals in real-time.
      - Enhanced reliability and performance with microservices reduce load times and provide a smoother, faster user experience.
3. **Platform for Sellers**
   - Description: The platform now allows sellers to list products directly, opening a new avenue for revenue and product diversity.
   - Functionality: 
      - User-Friendly Interface for Sellers: The UI was revamped for both buyers and sellers. Sellers have access to a user-friendly dashboard where they can add product details, track listings, and view analytics on product views and engagements.
      - Allows sellers to create detailed product descriptions, upload images, and set prices, giving them full control over their product listings.
     - Buyers gain access to a greater variety of products from multiple sources, adding value to their shopping experience.
4. **Price Drop Alert (Cron Job)**
   - Description: A cron job was implemented to alert users when there is a price drop on products in their wishlist, along with a new organization of items based on the time of addition.
   - Functionality: 
      - Users automatically receive alerts when the price of a wishlist item decreases, helping them make timely purchase decisions.
      - Enhances engagement by giving users up-to-date information about potential savings on favorite items.
5. **Images for Scheduler job**

   <img src = https://github.com/SE-vrs-organization/slash-ui/blob/main/assets/welcome.jpg>
   <img src = https://github.com/SE-vrs-organization/slash-ui/blob/main/assets/login.jpg>
   <img src = https://github.com/SE-vrs-organization/slash-ui/blob/main/assets/search.jpg>
   <img src = https://github.com/SE-vrs-organization/slash-ui/blob/main/assets/wishlist.png>
   <img src = https://github.com/SE-vrs-organization/slash-ui/blob/main/assets/posting.png>


:golf: Future Roadmap
---

We envision a range of features aimed at expanding functionality, enhancing user experience, and promoting seamless, interactive shopping. The future roadmap includes the following plans:

1. Enhanced User Experience Features
   - **Pagination Feature**  
      - Implement pagination for the product result table, allowing users to browse multiple products across various e-commerce sites in a structured, organized manner. 
      - This feature aims to improve data display, prevent clutter, and enhance navigation within search results.

   - **Additional Account Settings**  
      - Introduce more user-centric account settings, enabling users to tailor their profile and preferences to meet their needs. 
      - This will increase personalization and usability, making the platform more engaging and adaptable.

   - **Social Media Login**  
      - Integrate social media login options (Gmail, Facebook, etc.) for secure, convenient user access. 
      - This reduces sign-up barriers and enhances account security, providing a more flexible login experience.

   - **Wishlist Sharing**  
      - Enable users to share their wishlists with friends and family. 
      - This collaborative feature is ideal for sharing gift ideas, making joint shopping lists, and seeking recommendations, adding a social dimension to the platform.

2. Advanced Data and Predictive Capabilities
   - **Predictive Model for Optimal Purchase Timing**  
      - Develop a predictive model to analyze price trends and predict the best timing for purchasing items at the lowest price. 
      - This intelligent feature will provide valuable insights, guiding users to make well-informed purchasing decisions.

   - **Price Chart Visualization**  
      - Introduce a feature that visually represents price trends over time, allowing users to track historical price changes. 
      - This can help users understand pricing patterns and make smarter, data-driven purchase decisions.

3. Improved Search and Filtering
   - **Enhanced Search Capabilities**  
      - Upgrade the search functionality with advanced filters, allowing users to refine results by criteria such as ratings, price, brand, and more. 
      - This will help users quickly locate the products that best fit their preferences and needs.

   - **Multi-Platform Integration**  
      - Extend the search functionality to include results from a wider range of e-commerce platforms, such as Etsy and Dick's Sporting Goods. 
      - This will provide users with a comprehensive selection of options from diverse online vendors, enhancing the overall shopping experience.

   - **Seller-Posted Item Search**  
      - Add a dedicated search function for items posted directly by sellers on the platform, allowing users to browse products listed by small vendors or individual sellers more easily.

4. Expanded Shopping and Transaction Features
   - **Shopping Cart and Payment Integration**  
      - Implement a full e-commerce experience by adding a shopping cart and payment system, allowing buyers to purchase items posted by sellers directly on the platform. 
      - This end-to-end transaction support will streamline the buying process and provide a unified shopping solution.

   - **Wishlist and Favorites Tracking**  
      - Enable persistent login sessions using session cookies, allowing users to access their wishlist and preferences without needing to log in repeatedly. 
      - This continuity enhances the user experience by ensuring favorite items and browsing history remain accessible.

5. Role-Based Access and Seller Tools
   - **Role-Based Login System**  
      - Introduce role-based login to distinguish between buyers and sellers, providing tailored access and functionality based on user roles. 
      - This will improve the platform's organizational structure and security.

   - **Integrated Chatbot for Buyer-Seller Communication**  
      - Add a chatbot to facilitate real-time conversations between buyers and sellers, allowing them to discuss products and negotiate prices. 
      - This feature will encourage interactive communication and foster trust between users.

6. Persistent User Session
   - **Persistent Login with Session Cookies**  
      - Maintain user sessions by storing session cookies, allowing users to stay logged in between sessions. 
      - This feature enhances the user experience by keeping accounts readily accessible and reducing repeated logins.


:sparkles: Contributors
---

1. Shubham Kakride (skakird@ncsu.edu)
2. Rakshita Tantry (rtantry@ncsu.edu)
3. Vinal Bagaria (vbagari@ncsu.edu)



## 🙏 Acknowledgements <a name="Acknowledgement"></a>
We would like to thank Professor Dr Timothy Menzies for helping us understand the process of Maintaining a good Software Engineering project. We would also like to thank the teaching assistants for their support throughout the project.
We would also like to extend our gratitude to previous group : https://github.com/MeryHarikaG/slash-phase5


:email: Support
---
For any queries and help, please reach out to us at : simlyclipse43@gmail.com
