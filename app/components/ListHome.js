import React, {Component} from 'react';
import { Text, View, Dimensions } from 'react-native';
import ItemList from './ItemList';
import fonts from '../../lib/fonts';

import { AudioContext } from '../context/AudioProvider';
import { RecyclerListView, LayoutProvider } from 'recyclerlistview';
import { Audio } from 'expo-av'; 
import { play, pause, resume, playNext } from '../controllers/audioController';

class ListHome extends Component {
    static contextType = AudioContext;
  
    constructor(props) {
      super(props);
      this.state = {
        optionModalVisible: false,
      };
  
      this.currentItem = {};
      console.log("width:",Dimensions.get('window').width)
    }
  
    layoutProvider = new LayoutProvider(
      i => 'audio',
      (type, dim) => {
        switch (type) {
          case 'audio':
            dim.width = Dimensions.get('window').width;
            dim.height = 70;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      }
    );
  
    handleAudioPress = async audio => {
      const {
        soundObj,
        playbackObj,
        currentAudio,
        updateState,
        audioFiles,
      } = this.context;
      // playing audio for the first time.
      if (soundObj === null) {
        const playbackObj = new Audio.Sound();
        const status = await play(playbackObj, audio.uri);
        const index = audioFiles.indexOf(audio);
        return updateState(this.context, {
          currentAudio: audio,
          playbackObj: playbackObj,
          soundObj: status,
          isPlaying: true,
          currentAudioIndex: index,
        });
      }
  
      // pause audio
      if (
        soundObj.isLoaded &&
        soundObj.isPlaying &&
        currentAudio.id === audio.id
      ) {
        const status = await pause(playbackObj);
        return updateState(this.context, { soundObj: status, isPlaying: false });
      }
  
      // resume audio
      if (
        soundObj.isLoaded &&
        !soundObj.isPlaying &&
        currentAudio.id === audio.id
      ) {
        const status = await resume(playbackObj);
        return updateState(this.context, { soundObj: status, isPlaying: true });
      }
  
      // select another audio
      if (soundObj.isLoaded && currentAudio.id !== audio.id) {
        const status = await playNext(playbackObj, audio.uri);
        const index = audioFiles.indexOf(audio);
        return updateState(this.context, {
          currentAudio: audio,
          soundObj: status,
          isPlaying: true,
          currentAudioIndex: index,
        });
      }
    };
  
    rowRenderer = (type, item, index, extendedState, props) => {
      return (
        <ItemList
          data={props.data}
          theme={props.theme}
          navigation={props.navigation}
          song={item.filename}
          artist='Desconocido'
          isPlaying={extendedState.isPlaying}
          activeListItem={this.context.currentAudioIndex === index}
          duration={item.duration}
          onAudioPress={() => this.handleAudioPress(item)}
        />
      );
    };
  
    render() {
      return (
        <AudioContext.Consumer style={styles.contentList}>
          <Text style={[{...fonts.title, color: this.props.theme.titleList}]}>Lista</Text>
          {({ dataProvider, isPlaying }) => {
            return (
                <RecyclerListView
                  dataProvider={dataProvider}
                  layoutProvider={this.layoutProvider}
                  rowRenderer={this.rowRenderer}
                  extendedState={{ isPlaying }}          
                />
            );
          }}
        </AudioContext.Consumer>
      );
    }
}



//Old Cod
/* const ListHome = ({
    data, theme, navigation
}) => (
    <View style={styles.contentList}>
        <Text style={[{...fonts.title, color: theme.titleList}]}>Lista</Text>
        {data.map((item)=>{
            return <ItemList data={item} theme={theme} navigation={navigation}/>
        })}
    </View>
); */

const styles = {
    contentList: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        top: 86,
        with: "100%",
    }
}

export default ListHome;
