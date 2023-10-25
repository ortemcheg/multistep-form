import styles from "./Breadcrumbs.module.scss";
interface BreadcrumbsProps {
  stepNames: string[];
  currentStep: number;
}
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  stepNames,
  currentStep,
}) => {
  return (
    <ul className={styles.breadcrumbs}>
      {stepNames.map((name, index) => (
        <li key={name} className={currentStep === index ? styles.selected : ""}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
