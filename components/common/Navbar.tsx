import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { JSX, SVGProps } from "react"
import {ModeToggle} from "@/components/ui/ModeToggle";

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-fuchsia-950">
      <Link className="flex items-center gap-2" href="/">
        <MountainIcon className="h-6 w-6"/>
        <span className="text-lg font-semibold">Auth System</span>
      </Link>
      <div className="hidden md:flex gap-4">
        <Link className="text-lg font-medium hover:underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className="text-lg font-medium hover:underline underline-offset-4" href="/auth/login">
          Login
        </Link>
        <Link className="text-lg font-medium hover:underline underline-offset-4" href="/auth/register">
          Register
        </Link>
        <div className="text-lg font-medium">
          <ModeToggle/>
        </div>

      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Services
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Portfolio
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
