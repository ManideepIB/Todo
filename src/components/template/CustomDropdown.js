import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppText, AppTextInput} from '../atoms';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';
const dropdownData = [
  {category: 'Work', value: '1', icon: 'briefcase'},
  {category: 'Personal', value: '2', icon: 'account'},
  {category: 'Social', value: '3', icon: 'account-multiple'},
  {category: 'Home', value: '4', icon: 'home'},
  {category: 'Groceries', value: '5', icon: 'cart'},
  {category: 'Meeting', value: '6', icon: 'calendar-clock'},
  {category: 'Item 7', value: '7', icon: 'alpha-a-circle'},
  {category: 'Item 8', value: '8', icon: 'alpha-b-circle'},
];
const CustomDropdown = ({category, onCategoryChange}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(dropdownData);
  const [search, setSearch] = useState('');
  const searchRef = useRef();

  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.category.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(dropdownData);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <AppText>
          {category === '' ? 'Select Category' : selectedCategory}
        </AppText>
        {clicked ? (
          <FontAwesome6 name="angle-up" size={20} />
        ) : (
          <FontAwesome6 name="angle-down" size={20} />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View style={styles.dropdownModal}>
          <AppTextInput
            placeholder="Search"
            value={search}
            // ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={styles.searchInput}
          />
          <FlatList
            data={data}
            keyExtractor={item => item.value}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => {
                      setSelectedCategory(item.category);
                      setClicked(!clicked);
                      onCategoryChange(item.category);
                      onSearch('');
                      setSearch('');
                      // searchRef.current.clear();
                    }}>
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={20}
                      color={colors.AppTheme}
                      style={{marginRight: 10}}
                    />
                    <AppText>{item.category}</AppText>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdownSelector: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    borderColor: colors.darkgrey,
  },
  dropdownModal: {
    position: 'absolute',
    elevation: 5,
    marginTop: 20,
    height: 300,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    zIndex: 1,
  },
  searchInput: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    borderRadius: 7,
    marginTop: 20,
    paddingLeft: 20,
  },
  categoryItem: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    // justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
