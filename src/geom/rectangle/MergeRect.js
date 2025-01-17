/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Merges the source rectangle into the target rectangle and returns the target rectangle.
 *
 * @function Phaser.Geom.Rectangle.MergeRect
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Rectangle} O - [target,$return]
 *
 * @param {Phaser.Geom.Rectangle} target - Target rectangle. Will be modified to include source rectangle.
 * @param {Phaser.Geom.Rectangle} source - Rectangle that will be merged into target rectangle.
 *
 * @return {Phaser.Geom.Rectangle} Modified target rectangle that contains source rectangle.
 */
var MergeRect = function (target, source)
{
    // var minX = Math.min(target.x, source.x);
    // var minY = Math.min(target.y, source.y);

    // target.x = minX;
    // target.y = minY;

    var x = Math.min(target.x, source.x);
    var y = Math.min(target.y, source.y);

    var r = Math.max(target.right, source.right);
    var b = Math.max(target.bottom, source.bottom);

    var w = Math.abs(r - x);
    var h = Math.abs(b - y);

    target.setTo(x, y, w, h);

    // var maxX = Math.max(target.right, source.right);

    // target.x = minX;
    // target.width = Math.abs(maxX - minX);

    // var minY = Math.min(target.y, source.y);
    // var maxY = Math.max(target.bottom, source.bottom);

    // target.y = minY;
    // target.height = Math.abs(maxY - minY);

    return target;
};

module.exports = MergeRect;
