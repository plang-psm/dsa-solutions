// Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.

public static int binarySearch(List<Integer> arr, int target) {
    //         divide and conquer
    //             left side var
    //             right side var
                
    //             loop through the arr
    //                 mid var from (right - left/2) + left
    //                 compare mid var to target
    //                     if mid is greater than tar -- set right side to mid
    //                     else if mid is less than tar -- left side to mid
    //                     else return mid
    //              return -1
            int left = 0;
            int right = arr.size()-1;
            while(left <= right) {
                int mid = (right-left)/2 + left;
                if(arr.get(mid) == target) return mid;
                else if (arr.get(mid) > target) right = mid-1;
                else left = mid+1;
            }
            return -1;
        }