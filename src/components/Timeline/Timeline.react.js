// @flow

import * as React from "react";
import cn from "classnames";

import TimelineItem from "./TimelineItem.react";
import TimelineTime from "./TimelineTime.react";
import TimelineBadge from "./TimelineBadge.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function Timeline({ className, children }: Props): React.Node {
  const classes = cn(
    {
      timeline: true,
    },
    className
  );
  return <ul className={classes}>{children}</ul>;
}

Timeline.Item = TimelineItem;
Timeline.Time = TimelineTime;
Timeline.Badge = TimelineBadge;

export default Timeline;
