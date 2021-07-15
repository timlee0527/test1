import React, {useState, forwardRef} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${({theme, isFocused}) => (isFocused ? theme.text : theme.label)};
`;

const StyledTextInput = styled.TextInput`
  background-color: ${({theme, editable}) =>
    editable ? theme.background : theme.inputDisabledBackground};
  color: ${({theme}) => theme.text};
  padding: 20px 10px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 4px;
`;

const Input = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      onSubmitEditing,
      onBlur,
      placeholder,
      isPassword,
      returnKeyType,
      maxLength,
      disabled,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Container>
        <Label isFocused={isFocused}>{label}</Label>
        <StyledTextInput
          ref={ref}
          isFocused={isFocused}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          placeholder={placeholder}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCorrect={false}
          autoCapitalize="none"
          textContentType="none"
          secureTextEntry={isPassword}
          editable={!disabled}
        />
      </Container>
    );
  }
);

Input.defaultProps = {
  onBlur: () => {},
  onChangeText: () => {},
  onSubmitEditing: () => {},
};

Input.propTypes = {
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Input;
