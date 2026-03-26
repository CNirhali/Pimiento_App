import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Plus, Check, Clock, AlertCircle } from 'lucide-react-native';

const INITIAL_PAYMENTS = [
  { id: '1', txnId: '#TXN-84729', date: 'Oct 24, 2023', name: 'John Smith', amount: '$1,250.00', status: 'Completed' },
  { id: '2', txnId: '#TXN-84728', date: 'Oct 23, 2023', name: 'Maria Garcia', amount: '$3,450.00', status: 'Processing' },
  { id: '3', txnId: '#TXN-84727', date: 'Oct 22, 2023', name: 'Robert Johnson', amount: '$850.00', status: 'Completed' },
  { id: '4', txnId: '#TXN-84726', date: 'Oct 20, 2023', name: 'James Wilson', amount: '$2,100.00', status: 'Failed' },
];

export default function PaymentsScreen() {
  const renderStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return <Check color="#059669" size={16} />;
      case 'Processing': return <Clock color="#F59E0B" size={16} />;
      case 'Failed': return <AlertCircle color="#EF4444" size={16} />;
      default: return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View>
          <Text style={styles.txnId}>{item.txnId}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
      <View style={styles.cardDivider} />
      <View style={styles.cardBottom}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.statusContainer}>
          {renderStatusIcon(item.status)}
          <Text style={[
            styles.statusText,
            item.status === 'Completed' ? styles.textSuccess :
            item.status === 'Processing' ? styles.textWarning : styles.textDanger
          ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={INITIAL_PAYMENTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <TouchableOpacity style={styles.fab}>
        <Plus color="#FFFFFF" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  txnId: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: '#6B7280',
  },
  amount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#059669', // Emerald
  },
  cardDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 12,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
  },
  textSuccess: { color: '#059669' },
  textWarning: { color: '#F59E0B' },
  textDanger: { color: '#EF4444' },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#059669',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
});
