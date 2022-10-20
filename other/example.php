<?php
array_map(
function ($arg1, $arg2) use ($var1, $var2) {
    return $arg1 + $arg2 / ($var + $var2);     },
    [ 'complex' => 'code',  'with' => function () { return 'inconsistent'; },
        'formatting' => 'is',
                'hard' => 'to',
              'maintain' => true,
    ]
);

?>
<article class="test"   >

    My article.
        <h1 class="headline">  A headline—<?php echo "OH NO!"; ?></h1>
</article>