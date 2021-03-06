timing_test(function() {
  at(0 * 1000, function() {
    assert_styles('.anim', {'x':'100px', 'height':'10px'});
  }, "Autogenerated");
  at(0.2 * 1000, function() {
    assert_styles('.anim', {'x':'160px', 'height':'16px'});
  }, "Autogenerated");
  at(0.4 * 1000, function() {
    assert_styles('.anim', {'x':'220px', 'height':'22px'});
  }, "Autogenerated");
  at(0.6000000000000001 * 1000, function() {
    assert_styles('.anim', {'x':'280px', 'height':'28px'});
  }, "Autogenerated");
  at(0.8 * 1000, function() {
    assert_styles('.anim', {'x':'340px', 'height':'34px'});
  }, "Autogenerated");
  at(1 * 1000, function() {
    assert_styles('.anim', {'x':'400px', 'height':'40px'});
  }, "Autogenerated");
  at(1.2 * 1000, function() {
    assert_styles('.anim', {'x':'400px', 'height':'40px'});
  }, "Autogenerated");
}, "Autogenerated checks.");
