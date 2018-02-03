import React from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

var MOCKED_DATA = [
  {
	key: 0,
	title: 'Flexbox',
	subtitle: 'Justify Content',
	screen: 'LayoutJustify',
  },
  {
	key: 1,
	title: 'Flexbox',
	subtitle: 'Complex Layout',
	screen: 'LayoutComplex',
  },
  {
	key: 2,
	title: 'CustomView',
	subtitle: 'Some Customize Views',
	screen: 'CustomButton',
  },
  {
	key: 3,
	title: 'Life Cycle',
	subtitle: 'Component Life Cycle',
	screen: 'LifecycleComponent',
  },
];

export default class HomeTableView extends React.Component {
    
    static navigationOptions = {
        title: 'React',
    };
    
    render() {
        handler = () => { alert('hi')};

        return (
            <FlatList
                style={styles.list}
                ItemSeparatorComponent={ () => <View style={styles.separator} />}
                data={MOCKED_DATA}
                renderItem = { this._renderCell }
                onPressItem = { this._selectCell }
            />

        );
    }
    
    _renderCell = ({item, idx}) => {
        return(
            <TouchableOpacity style={styles.container} onPress={()=>this._selectCell(item, item.key)}>
                    <Text style={styles.title} >{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
            
        )
    }
    
    _selectCell = (item, idx) => {
        const { navigate } = this.props.navigation;
        navigate(item.screen);
        console.log(item.title);
    };
}

class HomeListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };
    
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this._onPress}>
                <Text style={styles.title} >{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        height: 64,
        backgroundColor: '#FFFFFF',
    },
    container: {
        // backgroundColor: '#FFFFFF',
    },
    separator: {
        height: 0.5,
        marginLeft: 8,
        backgroundColor: '#666666',
    },

    title: {
        fontSize: 20,
        marginLeft: 8,
        marginBottom: 8,
        textAlign: 'left',
    },
    subtitle: {
        fontSize: 12,
        marginLeft: 8,
        marginBottom: 8,
        textAlign: 'left',
    },

    thumbnail: {
        width: 53,
        height: 81,
    },
});