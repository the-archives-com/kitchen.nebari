import type { Metadata,Viewport } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Nebari Recipes",description:"Step-by-step recipes with built-in cooking timers.",manifest:"/manifest.webmanifest",icons:{icon:"/kitchen-nebari-mark.png",apple:"/kitchen-nebari-mark.png"},appleWebApp:{capable:true,title:"Nebari Recipes"}};
export const viewport:Viewport={themeColor:"#365d49",width:"device-width",initialScale:1};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
