timing_test(function() {
  at(0 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 40, 60, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 40, 60, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 20, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 20, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.6427876096865394, 0.766044443118978, 0, 0, -0.766044443118978, 0.6427876096865394, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(0.6427876096865394, 0, -0.766044443118978, 0, 0, 1, 0, 0, 0.766044443118978, 0, 0.6427876096865394, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'}]);
  }, "Autogenerated");
  at(0.5 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 10, 15, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 5, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 15, 30, 45, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 15, 30, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 15, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 10, 30, 1)'},
       {'transform':'matrix3d(1.125, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.25, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.375, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 4, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.375, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 4.25, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.75, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.125, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 2.75, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.9762960071199334, 0.21643961393810288, 0, 0, -0.21643961393810288, 0.9762960071199334, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.7933533402912352, 0.6087614290087207, 0, 0, -0.6087614290087207, 0.7933533402912352, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(0.9762960071199334, 0, -0.21643961393810288, 0, 0, 1, 0, 0, 0.21643961393810288, 0, 0.9762960071199334, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(0.7933533402912352, 0, -0.6087614290087207, 0, 0, 1, 0, 0, 0.6087614290087207, 0, 0.7933533402912352, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(0.9762960071199334, 0.21643961393810288, -0.21643961393810288, 0.9762960071199334, 0, 0)'},
       {'transform':'matrix(0.7933533402912352, 0.6087614290087207, -0.6087614290087207, 0.7933533402912352, 0, 0)'}]);
  }, "Autogenerated");
  at(1 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 10, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 40, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 10, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 40, 1)'},
       {'transform':'matrix3d(1.25, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.25, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.25, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3.5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.25, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3.5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.9063077870366499, 0.42261826174069944, 0, 0, -0.42261826174069944, 0.9063077870366499, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.9063077870366499, 0.42261826174069944, 0, 0, -0.42261826174069944, 0.9063077870366499, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(0.9063077870366499, 0, -0.42261826174069944, 0, 0, 1, 0, 0, 0.42261826174069944, 0, 0.9063077870366499, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(0.9063077870366499, 0, -0.42261826174069944, 0, 0, 1, 0, 0, 0.42261826174069944, 0, 0.9063077870366499, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(0.9063077870366499, 0.42261826174069944, -0.42261826174069944, 0.9063077870366499, 0, 0)'},
       {'transform':'matrix(0.9063077870366499, 0.42261826174069944, -0.42261826174069944, 0.9063077870366499, 0, 0)'}]);
  }, "Autogenerated");
  at(1.5 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 15, 30, 45, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 15, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 10, 15, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 10, 30, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 5, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 15, 30, 50, 1)'},
       {'transform':'matrix3d(1.375, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 4, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.75, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.125, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.125, 0, 0, 0, 0, 1.5, 0, 0, 0, 0, 2.75, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.25, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.375, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 4.25, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.7933533402912352, 0.6087614290087207, 0, 0, -0.6087614290087207, 0.7933533402912352, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.9762960071199334, 0.21643961393810288, 0, 0, -0.21643961393810288, 0.9762960071199334, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(0.7933533402912352, 0, -0.6087614290087207, 0, 0, 1, 0, 0, 0.6087614290087207, 0, 0.7933533402912352, 0, 0, 0, 0, 1)'},
       {'transform':'matrix3d(0.9762960071199334, 0, -0.21643961393810288, 0, 0, 1, 0, 0, 0.21643961393810288, 0, 0.9762960071199334, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(0.7933533402912352, 0.6087614290087207, -0.6087614290087207, 0.7933533402912352, 0, 0)'},
       {'transform':'matrix(0.9762960071199334, 0.21643961393810288, -0.21643961393810288, 0.9762960071199334, 0, 0)'}]);
  }, "Autogenerated");
  at(2 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 40, 60, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 20, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 20, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 40, 60, 1)'},
       {'transform':'matrix3d(1.5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.6427876096865394, 0.766044443118978, 0, 0, -0.766044443118978, 0.6427876096865394, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(0.6427876096865394, 0, -0.766044443118978, 0, 0, 1, 0, 0, 0.766044443118978, 0, 0.6427876096865394, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
  at(2.5 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 40, 60, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 20, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 20, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 40, 60, 1)'},
       {'transform':'matrix3d(1.5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1.5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 50, 1)'},
       {'transform':'matrix3d(1, 0, 0, 0, 0, 0.6427876096865394, 0.766044443118978, 0, 0, -0.766044443118978, 0.6427876096865394, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix3d(0.6427876096865394, 0, -0.766044443118978, 0, 0, 1, 0, 0, 0.766044443118978, 0, 0.6427876096865394, 0, 0, 0, 0, 1)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
}, "Autogenerated checks.");
