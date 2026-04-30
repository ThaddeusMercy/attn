"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function MembershipModalButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-14 w-full cursor-pointer rounded-md bg-black text-[16px] font-semibold text-white">
          Join AttentionHQ
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Congratulations, you&apos;ve bought it.</DialogTitle>
          <DialogDescription>Coupon Code</DialogDescription>
        </DialogHeader>

        <p className="my-4 wrap-break-word text-[48px] font-black leading-none tracking-[-0.06em] text-black sm:text-[32px]">
          FOUNDERMEMBER
        </p>

        <DialogClose asChild>
          <Button className="h-12 w-full cursor-pointer rounded-md bg-black text-[16px] font-semibold text-white">
            close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
