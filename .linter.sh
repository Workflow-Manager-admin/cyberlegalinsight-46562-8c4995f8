#!/bin/bash
cd /home/kavia/workspace/code-generation/cyberlegalinsight-46562-8c4995f8/cyberlegalinsight_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

