const BaseURL = " http://localhost:3030/api/v1/";
const NavUrl = "http://localhost:3030/navbar";
import axios from "axios";

//navbar api
export async function NavBarMenu() {
  const res = await axios.get(NavUrl);
  if (res.status === 200) {
    return res.data.navbarItems; // Return the array directly
  } else {
    return []; // Return an empty array if the request fails
  }
}

//all post api

export async function allBlogPost() {
  const res = await axios.get(BaseURL + "/readAllBlogs");
  if (res.status === 200) {
    return res.data; // Return the array directly
  } else {
    return []; // Return an empty array if the request fails
  }
}
