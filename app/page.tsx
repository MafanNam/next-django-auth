'use client';

import {cn} from "@/lib/utils"
import {Icons} from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import {Button, buttonVariants} from "@/components/ui/button"
import Link from "next/link";
import {continueWithGoogle} from "@/utils";
import {ImGoogle} from "react-icons/im";


export default function Home() {
  return (
    <div className="container relative w-full h-svh flex items-center">
      <PageHeader>
        <PageHeaderHeading>Full Auth System</PageHeaderHeading>
        <PageHeaderDescription>
          JWT Token, Google, Facebook auth. Reset password for your account
        </PageHeaderDescription>
        <PageActions>
          <Link href="/auth/login" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Button variant="outline" type='button' className={cn(buttonVariants({variant: "outline"}))} onClick={continueWithGoogle}>
            <ImGoogle className='mr-3'/>Google
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  );
}
