"use client";

import Link from "next/link";
import styles from "./backBtn.module.css";

type Props = {
  content: string;
  link: string;
};

const BackBtn = ({ content, link }: Props) => {
  return (
    <>
      <Link href={link} className={`btn btn-primary ${styles["back-btn"]}`}>
        {content}
      </Link>
    </>
  );
};
export default BackBtn;
