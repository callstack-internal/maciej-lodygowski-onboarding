import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {StorageEntity} from '@openmobilehub/storage-core';
import {GoogleDriveStorageClient} from '@openmobilehub/storage-googledrive';
import GoogleAuthClient from '@openmobilehub/auth-google';
import {Color} from '../styles/color.ts';
import {Dirs} from 'react-native-file-access';

export const StorageView = () => {
  const [files, setFiles] = useState<StorageEntity[]>();
  const storageClient = useRef(new GoogleDriveStorageClient(GoogleAuthClient));
  const [currentRootFolder, setCurrentRootFolder] = useState(
    storageClient?.current.rootFolderId,
  );
  useEffect(() => {
    async function loadFiles() {
      const response = await storageClient.current.listFiles(currentRootFolder);
      setFiles(response);
      console.log(response);
    }
    void loadFiles();
  }, [storageClient, currentRootFolder]);

  const isFolder = (item: StorageEntity) => !item.mimeType;

  const renderFile = (item: StorageEntity) => (
    <TouchableOpacity
      onPress={async () => {
        if (isFolder(item)) {
          setCurrentRootFolder(item.id);
        } else {
          await storageClient.current.downloadFile(item, Dirs.DocumentDir);
        }
      }}
      style={styles.file}>
      <Text>{item.name}</Text>
      <Text>{item.createdTime?.toDateString()}</Text>

      <Text>{item.createdTime?.toTimeString()}</Text>
      <Text>{item.extension}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>Storage</Text>
      <Button
        title="Go back"
        onPress={() => setCurrentRootFolder(storageClient.current.rootFolderId)}
      />
      <FlatList data={files} renderItem={({item}) => renderFile(item)} />
      <Button
        title="Add Folder"
        onPress={() =>
          storageClient.current.createFolder('New folder', currentRootFolder)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  file: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.Accent,
    marginVertical: 5,
  },
});
