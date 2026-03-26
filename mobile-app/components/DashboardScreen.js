import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Users, Map, CreditCard, Clock } from 'lucide-react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Overview</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#D1FAE5' }]}>
            <Users color="#059669" size={24} />
          </View>
          <Text style={styles.statValue}>124</Text>
          <Text style={styles.statLabel}>Active Farmers</Text>
        </View>
        
        <View style={styles.statCard}>
          <View style={[styles.iconContainer, { backgroundColor: '#D1FAE5' }]}>
            <Map color="#059669" size={24} />
          </View>
          <Text style={styles.statValue}>3,450</Text>
          <Text style={styles.statLabel}>Total Acres</Text>
        </View>
      </View>
      
      <View style={styles.statCardFull}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
            <View style={[styles.iconContainer, { backgroundColor: '#FEF3C7', marginRight: 12, marginBottom: 0 }]}>
              <CreditCard color="#F59E0B" size={24} />
            </View>
            <View>
                <Text style={styles.statLabel}>Pending Payments</Text>
                <Text style={styles.statValue}>$12,450</Text>
            </View>
        </View>
      </View>

      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        
        <View style={styles.activityCard}>
          <View style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: '#D1FAE5' }]}>
              <Clock color="#059669" size={16} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}><Text style={styles.bold}>John Smith</Text> registered a new farm parcel.</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
          
          <View style={[styles.activityItem, { borderBottomWidth: 0, paddingBottom: 0, marginBottom: 0 }]}>
            <View style={[styles.activityIcon, { backgroundColor: '#DBEAFE' }]}>
              <CreditCard color="#3B82F6" size={16} />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityText}>Payment of <Text style={styles.bold}>$1,250</Text> processed for <Text style={styles.bold}>Robert Johnson</Text>.</Text>
              <Text style={styles.activityTime}>1 day ago</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statCardFull: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  activitySection: {
    marginBottom: 32,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 4,
  },
  bold: {
    fontWeight: '600',
    color: '#111827',
  },
  activityTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
