import { Placeholder } from "react-bootstrap";

const PlaceholderComponent = () => {
  return (
    <>
      <Placeholder size="lg" as="p" animation="glow">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder size="lg" as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder size="lg" as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder size="lg" as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder size="lg" as="p" animation="wave">
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

export default PlaceholderComponent;
