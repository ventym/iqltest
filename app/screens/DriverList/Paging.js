import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from '../../actions';

export const Paging = () => {
  const dispatch = useDispatch();

  const pageIndex = useSelector(state => state.drivers.pageIndex);
  const pageCount = useSelector(state => state.drivers.pageCount);
  const isFirstPage = pageIndex > 0 ? false : true;
  const isLastPage = pageIndex < pageCount - 1 ? false : true;

  const handlePressPrevPage = React.useCallback(() => {
    if (!isFirstPage) {
      dispatch(actions.setPageIndex(pageIndex - 1));
    }
  }, [dispatch, isFirstPage, pageIndex]);

  const handlePressNextPage = React.useCallback(() => {
    if (!isLastPage) {
      dispatch(actions.setPageIndex(pageIndex + 1));
    }
  }, [dispatch, isLastPage, pageIndex]);

  if (pageCount === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        disabled={isFirstPage}
        onPress={handlePressPrevPage}
      >
        <Text style={isFirstPage ? styles.buttonTextDisabled : styles.buttonText}>
          {'<'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        {`${pageIndex + 1} / ${pageCount}`}
      </Text>

      <TouchableOpacity
        style={styles.button}
        disabled={isLastPage}
        onPress={handlePressNextPage}
      >
        <Text style={isLastPage ? styles.buttonTextDisabled : styles.buttonText}>
          {'>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  button: {
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 20,
    color: 'blue',
  },
  buttonTextDisabled: {
    fontSize: 20,
    color: 'gray',
  },
});
