interface props {
  image: string;
}

export const ImageComponent = ({image}: props): any => {
  return <img src={image} width='150' />;
};
