import { Box } from 'components/Box/Box.styled';

export const Section = ({ children }) => {
  return (
    <section>
      <Box>{children}</Box>
    </section>
  );
};
