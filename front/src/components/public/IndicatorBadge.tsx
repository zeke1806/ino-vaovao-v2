import * as React from 'react';
import { Badge } from 'native-base';

interface IndicatorBadgeProps {
  color: string;
}

const IndicatorBadge: React.FC<IndicatorBadgeProps> = ({ color }) => (
  <Badge
    style={{
      width: 15,
      height: 15,
      borderRadius: 100,
      backgroundColor: color,
    }}
  ></Badge>
);

export default IndicatorBadge;
