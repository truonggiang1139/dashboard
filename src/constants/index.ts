export const path = {
  dashboard: "/dashboard",
  post: "/post",
  settings: "/settings",
  subcription: "dashboard/subcription",
  revenue: "dashboard/revenue"
} as const;

export const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

export const navBar: { id: keyof typeof path; title: string }[] = [
  { id: "dashboard", title: "Dashboard" },
  { id: "post", title: "Post Management" },
  {
    id: "settings",
    title: "Settings"
  }
];
