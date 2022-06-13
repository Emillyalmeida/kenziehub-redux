import { LiCard } from "./style";

const CardTech = ({ title, status, id, isInfo, ...rest }) => {
  return (
    <LiCard {...rest} onClick={() => isInfo(id)}>
      <h4>{title}</h4>
      <span>{status}</span>
    </LiCard>
  );
};

export default CardTech;
