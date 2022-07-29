import styled from 'styled-components';

const getType = (type) => {
  switch (type) {
    case 'secondary':
      return {
        border: 'none',
        color: '#000',
      };
    default:
      return {
        border: '1px solid #E6E9EC',
        color: '#000',
      };
  }
};

const Container = styled.input`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '44px'};
  padding-left: ${({ pl }) => pl || '15px'};
  border-radius: 6px;
  outline: none;
  border: none;
  margin-right: ${({ mr }) => `${mr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  background: #FFFFFF;
  box-shadow: 4px 0px 10px rgba(12, 137, 112, 0.25), -4px 0px 10px rgba(12, 137, 112, 0.25), 0px -4px 10px rgba(12, 137, 112, 0.25), 0px 4px 10px rgba(12, 137, 112, 0.25);
  /* ${({ type }) => getType(type)} */
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 30px;
`;

export { Container, Wrapper, Icon };