import * as React from 'react';
import { Collapse } from '@alifd/next';
import { DynamicPropWrapper } from 'lowcode/utils/component-wrapper';
import {CURRENT_COMP_PREFIX}  from '../_common';
const componentCollapseName = `${CURRENT_COMP_PREFIX}Collapse`;

export default DynamicPropWrapper('expandedKeys', Collapse, componentCollapseName);
