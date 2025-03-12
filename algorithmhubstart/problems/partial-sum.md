---
title: "Partial Sum"
difficulty: "Medium"
date: "2025-03-12"
tags: ["Two Pointers", "Sliding Window"]
platform: "Baekjoon"
---

## Problem Description

Find the shortest contiguous subarray whose sum is at least `S`.

[Problem Link](https://www.acmicpc.net/problem/1806)

## Solution Approach

- Use the **two-pointer technique** to track a moving sum.
- If the sum is greater than or equal to `S`, move the left pointer to minimize the subarray length.
- Otherwise, move the right pointer to expand the subarray.
- Track the minimum subarray length.

## Code (Java)

```java
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String[] nAndS = br.readLine().split(" ");
        int n = Integer.parseInt(nAndS[0]);
        int s = Integer.parseInt(nAndS[1]);

        String[] inputs = br.readLine().split(" ");
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(inputs[i]);
        }

        int left = 0, right = 0, sum = 0, minLength = Integer.MAX_VALUE;
        
        while (true) {
            if (sum >= s) {
                sum -= arr[left++];
            } else if (right == n) {
                break;
            } else {
                sum += arr[right++];
            }
            if (sum >= s) {
                minLength = Math.min(minLength, right - left);
            }
        }

        System.out.println(minLength == Integer.MAX_VALUE ? 0 : minLength);
    }
}
