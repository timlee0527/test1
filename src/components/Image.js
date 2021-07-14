import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker';
// import {Permissions} from 'react-native-permissions';
// import {Platform} from 'react-native';
// import {Alert} from 'react-native';

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.imageBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(Icon).attrs({
  name: 'camera',
  size: 22,
})`
  color: ${({theme}) => theme.imageButtonIcon};
`;

const PhotoButton = ({onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};

const StyledImage = styled.Image`
  background-color: ${({theme}) => theme.imageBackground};
  width: 100px;
  height: 100px;
  border-radius: ${({rounded}) => (rounded ? 50 : 0)}px;
`;

const Image = ({url, imageStyle, rounded, showButton, onChangeImage}) => {
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       if (Platform.OS !== 'ios') {
  //         const {status} = await Permissions.askAsync();
  //         if (status !== 'granted') {
  //           Alert.alert(
  //             'Photo Permission',
  //             'Please turn on the camera roll permissions.'
  //           );
  //         }
  //       }
  //     } catch (e) {
  //       Alert.alert('Photo Permission Error', e.message);
  //     }
  //   })();
  // }, []);

  // export interface ImagePickerResponse {
  //   didCancel?: boolean;
  //   errorCode?: ErrorCode;
  //   errorMessage?: string;
  //   assets: Asset[];
  const _handleEditButton = () => {
    // try {

    // } catch (e) {
    //   console.log(e.message);
    //   Alert.alert('Photo Error', e.message);
    // }
    ImagePicker.launchImageLibrary(
      {
        mediaTypes: 'photo',
      },
      response => {
        //onsole.log(response);
        onChangeImage(response.assets[0].uri);
      }
    );
  };

  return (
    <Container>
      <StyledImage source={{uri: url}} style={imageStyle} rounded={rounded} />
      {showButton && <PhotoButton onPress={_handleEditButton} />}
    </Container>
  );
};

Image.defaultProps = {
  rounded: false,
  showButton: false,
  onChangeImage: () => {},
};

Image.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
  rounded: PropTypes.bool,
  showButton: PropTypes.bool,
  onChangeImage: PropTypes.func,
};

export default Image;
