const { formatDateComponents } = require('./countdown-utils');

// Simple test runner without external dependencies
function runTests() {
  console.log('Running tests for formatDateComponents...\n');
  
  // Test case: should format date components with proper padding
  try {
    const testDate = new Date('2025-08-30T14:05:03');
    const result = formatDateComponents(testDate);
    
    const expected = {
      year: 2025,
      month: '08',
      day: '30',
      hour: '14',
      minute: '05',
      second: '03',
      endDate: '2025-08-30',
      endTime: '14:05:03'
    };
    
    // Check each property
    const checks = [
      result.year === expected.year,
      result.month === expected.month,
      result.day === expected.day,
      result.hour === expected.hour,
      result.minute === expected.minute,
      result.second === expected.second,
      result.endDate === expected.endDate,
      result.endTime === expected.endTime
    ];
    
    if (checks.every(check => check)) {
      console.log('✅ Test passed: formatDateComponents formats date with proper padding');
      console.log('   Input:', testDate.toISOString());
      console.log('   Output:', result);
    } else {
      console.log('❌ Test failed: formatDateComponents');
      console.log('   Expected:', expected);
      console.log('   Actual:', result);
    }
  } catch (error) {
    console.log('❌ Test error:', error.message);
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}