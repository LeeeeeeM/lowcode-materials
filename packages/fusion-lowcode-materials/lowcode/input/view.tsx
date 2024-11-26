import * as React from 'react';
import { Input } from '@alifd/next';
import { ValueWrapper } from 'lowcode/utils/component-wrapper';
import {CURRENT_COMP_PREFIX}  from '../_common';
const componentInputName = `${CURRENT_COMP_PREFIX}Input`;

export default ValueWrapper(Input, componentInputName);
