import styles from "./Breadcrumbs.module.scss";
interface BreadcrumbsProps {
  stepNames: string[];
  currentStep: number;
}

type MarkerPosition = "completed" | "current" | "upcoming";

const getMarkerPosition = (
  currentStep: number,
  index: number
): MarkerPosition => {
  if (currentStep === index) {
    return "current";
  } else if (currentStep < index) {
    return "upcoming";
  } else {
    return "completed";
  }
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  stepNames,
  currentStep,
}) => {
  return (
    <ul className={styles.breadcrumbs}>
      {stepNames.map((name, index) => (
        <li
          key={name}
          className={styles[getMarkerPosition(currentStep, index)]}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
