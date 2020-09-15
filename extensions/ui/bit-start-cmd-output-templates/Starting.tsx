import React from 'react';
import { render, Text, Color } from 'ink';
import Spinner from 'ink-spinner';

export const Starting = ({ workspace }) => <Text>{`Starting the development servers for ${workspace.id}...`}</Text>;