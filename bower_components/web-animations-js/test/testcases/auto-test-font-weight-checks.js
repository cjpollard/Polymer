timing_test(function() {
  at(0 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(0.3 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(0.6 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(0.8999999999999999 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(1.2 * 1000, function() {
    assert_styles( '#test', {'font-weight':'300'});
  }, "Autogenerated");
  at(1.5 * 1000, function() {
    assert_styles( '#test', {'font-weight':'500'});
  }, "Autogenerated");
  at(1.8 * 1000, function() {
    assert_styles( '#test', {'font-weight':'bold'});
  }, "Autogenerated");
  at(2.1 * 1000, function() {
    assert_styles( '#test', {'font-weight':'900'});
  }, "Autogenerated");
}, "Autogenerated checks.");
