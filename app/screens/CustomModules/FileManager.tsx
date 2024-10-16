import {Button, StyleSheet, View} from 'react-native';
import {SaveFilePickerModule} from 'save-file-picker-package';
const ASSETS_FILE_PATH = 'file.html';

export const FileManagerScreen = () => {
  const saveFileWithCallback = () => {
    SaveFilePickerModule.saveFileWithCallback(ASSETS_FILE_PATH, result => {
      console.log(result);
    });
  };

  const saveFileWithPromise = async () => {
    try {
      const isSuccess = await SaveFilePickerModule.saveFileWithPromise(
        ASSETS_FILE_PATH,
      );
      console.log({isSuccess});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Save file (callback)" onPress={saveFileWithCallback} />
      <Button title="Save file (async)" onPress={saveFileWithPromise} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
