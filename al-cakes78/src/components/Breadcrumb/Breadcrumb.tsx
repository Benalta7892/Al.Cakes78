import Link from "next/link";
import styles from "./Breadcrumb.module.css";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  crumbs: Crumb[];
};

const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className={styles["breadcrumb"]}>
      <ol>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={index} aria-current={isLast ? "page" : undefined}>
              {isLast || !crumb.href ? (
                <span>{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
              {!isLast && <span className={styles["separator"]}>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
export default Breadcrumb;
