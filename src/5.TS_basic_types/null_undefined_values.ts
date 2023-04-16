function test1(skill: boolean) {
  // some body
  skill;
}

// ideally this should not happen by default but by adding this "strictNullChecks": false  you should be able to easily bypass this check.
// test1(null); this will create error if uncommented.
