import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.buttonBackground};
  align-items: center;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: ${({theme}) => theme.buttonTitle};
`;

const Button = ({containerStyle, title, onPress, disabled}) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}>
      <Title>{title}</Title>
    </Container>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool
};

export default Button;
