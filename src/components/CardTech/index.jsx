import { LiCard } from "./style";

const CardTech = ({ title, status, id, open, ...rest }) => {
  return (
    <LiCard {...rest} onClick={() => open(id)}>
      <h4>{title}</h4>
      <span>{status}</span>
    </LiCard>
  );
};

export default CardTech;
