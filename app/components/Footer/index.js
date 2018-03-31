import { BottomNavigation } from 'react-native-paper';

export default class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'music', title: 'Music', icon: 'queue-music' },
                { key: 'albums', title: 'Albums', icon: 'album' },
                { key: 'recents', title: 'Recents', icon: 'history' },
            ],
        };
    }

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}
