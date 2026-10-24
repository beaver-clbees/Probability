var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Basic Definitions (1.1a)",
  "body": " Basic Definitions (1.1a)    Random Experiment   An experiment where the outcome cannot be predicted with certainty.     Sample Space   The set of all possible outcomes of a random experiment is called a sample space, S (also called outcome space, or just space).      Flip a coin and record the face that is showing:      Roll two dice and add the faces showing:       Flip two coins. Record the faces:      Flip two coins. Determine if they are the same:      Flip a coin until a heads appears. Record the number of flips needed:      Flip a coin until you get two heads in a row. Record how long (time) it takes:       Event   An event is a collection of outcomes in a sample space.    Notice that a sample space S is a set, and an event is a subset of S. We will review some basics of sets and see how they can be represented with Venn Diagrams. Our universal set is always our sample space in this context because the sample space contains all possible outcomes. We will assume all sets and elements are in S.   Empty or Null Set    denotes the empty or null set (the set containing no elements).       B indicates A is a subset of B. Draw and shade set A so it is a subset of B.          is the union of sets A and B. Elements in the union might be in A or in B or in both A and B. Shade           is the intersection of A and B. Elements in the intersection are in A and also in B. Shade .            is the complement of A (all elements in S that are NOT in A). Shade .          and are mutually exclusive or disjoint if . Sketch two mutually exclusive sets sets.         A and B are exhaustive if Make a sketch of two sets that are exhaustive.       These definitions extend to larger numbers of subsets. For example, given      are mutually exclusive events if for (they are pairwise disjoint).     are exhaustive events if       We are interested in computing the probability of an event A in our sample space. We can approximate the probability by repeating the experiment n times. Let N(A) be the number of times an outcome of the experiment is in the event (subset) A. Then we can approximate the probability of A as    which is called the relative frequency of the event A in these n repetitions of the experiment.  Note that if n is small and a few of us do this experiment we may get wildly different answers. However as n gets larger and larger, this fraction will tend to stabilize and we call it the probability of event A . You can think of it as  (Probability of A)     Suppose we have a fair, six sided die and we want to know the probability of the event, E that it will show an even number. Find the sample space S and E. What do you expect for P(E)?    Next we give the formal definition of a probability function.   Probability   Probability is a real-valued set function, P, that assigns to each event A in the sample space S, a number P(A), called the probability of the event A such that the following properties are satisfied:              If are events and (mutually disjoint) then for each positive integer k and for any countable (possibly infinite) number of events.        Sometimes you can use mathematics to determine what the probability function should be under given conditions. For example in the 6-sided die example, if the die is fair, then Let Let G be the set of odd outcomes.                                                   Equally Likely Outcomes   Suppose we have a random experiment with m outcomes and sample space . If each of the outcomes in S has the same probability of occurring (e.g. roll a fair die), then we say that each of the m outcomes are equally likely. In that case,         This makes it easy to determine the probability of an event: If is an event, with h outcomes, then      Standard deck of cards    Draw one card at random from a standard 52 card deck. The sample space is the collection of 52 cards. Assume that each card is equally likely to be chosen (i.e., that a card is drawn 'at random'). Thus the probability function assigns a probability of to each of the outcomes.  Let                        Determine the following probabilities. Write answer as a fraction (do not reduce).                                             Shade the regions indicated.                 Express the shaded regions using set notation.         Suppose a dart is thrown at the picture below. Assume it lands in the sample space, S. Let A be the event the dart lands in rectangle A and let B be the event the dart lands in rectangle B. Estimate the following probabilities and be prepared to justify your estimates.                                         "
},
{
  "id": "def-ranexp",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-ranexp",
  "type": "Definition",
  "number": "1.1",
  "title": "Random Experiment.",
  "body": " Random Experiment   An experiment where the outcome cannot be predicted with certainty.   "
},
{
  "id": "def-samplespace",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-samplespace",
  "type": "Definition",
  "number": "1.2",
  "title": "Sample Space.",
  "body": " Sample Space   The set of all possible outcomes of a random experiment is called a sample space, S (also called outcome space, or just space).   "
},
{
  "id": "shorttitlelowercase-2-2-3",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-3",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  Flip a coin and record the face that is showing:   "
},
{
  "id": "shorttitlelowercase-2-2-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-4",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Roll two dice and add the faces showing:    "
},
{
  "id": "shorttitlelowercase-2-2-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-5",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": "  Flip two coins. Record the faces:   "
},
{
  "id": "shorttitlelowercase-2-2-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-6",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Flip two coins. Determine if they are the same:   "
},
{
  "id": "shorttitlelowercase-2-2-7",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-7",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "",
  "body": "  Flip a coin until a heads appears. Record the number of flips needed:   "
},
{
  "id": "shorttitlelowercase-2-2-8",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-2-8",
  "type": "Worksheet Exercise",
  "number": "1.6",
  "title": "",
  "body": "  Flip a coin until you get two heads in a row. Record how long (time) it takes:   "
},
{
  "id": "shorttitlelowercase-2-3-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-1",
  "type": "Definition",
  "number": "1.3",
  "title": "Event.",
  "body": " Event   An event is a collection of outcomes in a sample space.   "
},
{
  "id": "def-emptyset",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-emptyset",
  "type": "Definition",
  "number": "1.4",
  "title": "Empty or Null Set.",
  "body": " Empty or Null Set    denotes the empty or null set (the set containing no elements).   "
},
{
  "id": "shorttitlelowercase-2-3-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-4",
  "type": "Worksheet Exercise",
  "number": "1.7",
  "title": "",
  "body": "   B indicates A is a subset of B. Draw and shade set A so it is a subset of B.      "
},
{
  "id": "shorttitlelowercase-2-3-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-5",
  "type": "Worksheet Exercise",
  "number": "1.8",
  "title": "",
  "body": "   is the union of sets A and B. Elements in the union might be in A or in B or in both A and B. Shade       "
},
{
  "id": "shorttitlelowercase-2-3-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-3-6",
  "type": "Worksheet Exercise",
  "number": "1.9",
  "title": "",
  "body": "   is the intersection of A and B. Elements in the intersection are in A and also in B. Shade .      "
},
{
  "id": "shorttitlelowercase-2-4-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4-1",
  "type": "Worksheet Exercise",
  "number": "1.10",
  "title": "",
  "body": "   is the complement of A (all elements in S that are NOT in A). Shade .      "
},
{
  "id": "shorttitlelowercase-2-4-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4-2",
  "type": "Worksheet Exercise",
  "number": "1.11",
  "title": "",
  "body": "   and are mutually exclusive or disjoint if . Sketch two mutually exclusive sets sets.      "
},
{
  "id": "shorttitlelowercase-2-4-3",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-4-3",
  "type": "Worksheet Exercise",
  "number": "1.12",
  "title": "",
  "body": "  A and B are exhaustive if Make a sketch of two sets that are exhaustive.      "
},
{
  "id": "shorttitlelowercase-2-5-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-5-6",
  "type": "Worksheet Exercise",
  "number": "1.13",
  "title": "",
  "body": "  Suppose we have a fair, six sided die and we want to know the probability of the event, E that it will show an even number. Find the sample space S and E. What do you expect for P(E)?   "
},
{
  "id": "def-probability",
  "level": "2",
  "url": "shorttitlelowercase-2.html#def-probability",
  "type": "Definition",
  "number": "1.5",
  "title": "Probability.",
  "body": " Probability   Probability is a real-valued set function, P, that assigns to each event A in the sample space S, a number P(A), called the probability of the event A such that the following properties are satisfied:              If are events and (mutually disjoint) then for each positive integer k and for any countable (possibly infinite) number of events.     "
},
{
  "id": "shorttitlelowercase-2-6-2-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-2-1",
  "type": "Worksheet Exercise",
  "number": "1.14",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-2-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-2-2",
  "type": "Worksheet Exercise",
  "number": "1.15",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-3-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-3-1",
  "type": "Worksheet Exercise",
  "number": "1.16",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-3-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-3-2",
  "type": "Worksheet Exercise",
  "number": "1.17",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-4-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-4-1",
  "type": "Worksheet Exercise",
  "number": "1.18",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-4-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-4-2",
  "type": "Worksheet Exercise",
  "number": "1.19",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-6-7",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-6-7",
  "type": "Worksheet Exercise",
  "number": "1.20",
  "title": "",
  "body": "      "
},
{
  "id": "deck_of_cards",
  "level": "2",
  "url": "shorttitlelowercase-2.html#deck_of_cards",
  "type": "Figure",
  "number": "1.6",
  "title": "",
  "body": " Standard deck of cards   "
},
{
  "id": "shorttitlelowercase-2-7-6-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-6-1",
  "type": "Worksheet Exercise",
  "number": "1.21",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-6-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-6-2",
  "type": "Worksheet Exercise",
  "number": "1.22",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-7-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-7-1",
  "type": "Worksheet Exercise",
  "number": "1.23",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-7-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-7-2",
  "type": "Worksheet Exercise",
  "number": "1.24",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-7-8",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-7-8",
  "type": "Worksheet Exercise",
  "number": "1.25",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-8-1",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-8-1",
  "type": "Worksheet Exercise",
  "number": "1.26",
  "title": "",
  "body": "  Shade the regions indicated.              "
},
{
  "id": "shorttitlelowercase-2-8-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-8-2",
  "type": "Worksheet Exercise",
  "number": "1.27",
  "title": "",
  "body": "  Express the shaded regions using set notation.    "
},
{
  "id": "shorttitlelowercase-2-9-1-2",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-2",
  "type": "Worksheet Exercise",
  "number": "1.28",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-3",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-3",
  "type": "Worksheet Exercise",
  "number": "1.29",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-4",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-4",
  "type": "Worksheet Exercise",
  "number": "1.30",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-5",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-5",
  "type": "Worksheet Exercise",
  "number": "1.31",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-2-9-1-6",
  "level": "2",
  "url": "shorttitlelowercase-2.html#shorttitlelowercase-2-9-1-6",
  "type": "Worksheet Exercise",
  "number": "1.32",
  "title": "",
  "body": "      "
},
{
  "id": "shorttitlelowercase-3",
  "level": "1",
  "url": "shorttitlelowercase-3.html",
  "type": "Worksheet",
  "number": "2",
  "title": "Properties of Sets (1.1b)",
  "body": "Properties of Sets (1.1b)   Commutative laws        Associative Laws                                                              Distributive Laws                                                              De Morgan's Laws                                                       Complementary Probability   For each event A,        Proof:        Probability of Empty Set    .       Proof:      Probability of Subset   If , then .       Proof:              Probability of an Event is less than 1   If , then .     Proof:      Inclusion-Exclusion Probability (Union)   For any two events A and B, .     Proof:              In the following, suppose that A and B are events in a sample space S.    If and , then find .        If and , then find .      If and , then find .     Inclusion-Exclusion Probability (Union of Three Events)   For any three events A, B, and C, (fill in)        Sketch of Proof:          Suppose A and B are subsets of the sample space S. If , and , then find the following:                   Fill in the Venn diagram with the appropriate probabilities in each region.                                    Suppose A and B are subsets of the sample space S. If , , then find          An insurance company looks at its auto insurance customers and finds that   all insure at least one car    85% insure more than one car    23% insure a sports car    17% insure more than one car, including a sports car    Find the probability that a customer selected at random insures exactly one car and it is not a sports car.   Hint : Let the sample space be the set of all people who insure at least one car. Let be the set of people insuring more than one car and be the set of people insuring a sports car. Draw a Venn diagram.       A survey of 1000 people found that 400 people had a pet, 300 people had a child, and 200 people had both a pet and a child.     If a person is selected at random, find the probability that the person has either a pet or a child.      Is it reasonable to assume that all of the outcomes in your sample space are equally likely? Explain         Two dice are rolled and the values shown on top are observed.     Write down a sample space for the experiment in such a way that each outcome in the sample space is equally likely.      What is the probability the sum of the two die is 7?      What is the probability the sum of the two die is at least 4?      What is the probability the sum of the two die is at most 11?      "
},
{
  "id": "thm-complement",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-complement",
  "type": "Theorem",
  "number": "2.1",
  "title": "Complementary Probability.",
  "body": " Complementary Probability   For each event A,    "
},
{
  "id": "shorttitlelowercase-3-4-9",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-4-9",
  "type": "Worksheet Exercise",
  "number": "2.1",
  "title": "",
  "body": "   Proof:    "
},
{
  "id": "thm-emptyset",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-emptyset",
  "type": "Theorem",
  "number": "2.2",
  "title": "Probability of Empty Set.",
  "body": " Probability of Empty Set    .   "
},
{
  "id": "shorttitlelowercase-3-5-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-5-2",
  "type": "Worksheet Exercise",
  "number": "2.2",
  "title": "",
  "body": "   Proof:    "
},
{
  "id": "thm-subset",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-subset",
  "type": "Theorem",
  "number": "2.3",
  "title": "Probability of Subset.",
  "body": " Probability of Subset   If , then .   "
},
{
  "id": "shorttitlelowercase-3-5-4",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-5-4",
  "type": "Worksheet Exercise",
  "number": "2.3",
  "title": "",
  "body": "   Proof:            "
},
{
  "id": "thm-less-than-one",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-less-than-one",
  "type": "Theorem",
  "number": "2.4",
  "title": "Probability of an Event is less than 1.",
  "body": " Probability of an Event is less than 1   If , then .   "
},
{
  "id": "shorttitlelowercase-3-5-6",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-5-6",
  "type": "Worksheet Exercise",
  "number": "2.4",
  "title": "",
  "body": " Proof:  "
},
{
  "id": "shorttitlelowercase-3-6-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-6-1",
  "type": "Theorem",
  "number": "2.5",
  "title": "Inclusion-Exclusion Probability (Union).",
  "body": " Inclusion-Exclusion Probability (Union)   For any two events A and B, .   "
},
{
  "id": "shorttitlelowercase-3-6-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-6-2",
  "type": "Worksheet Exercise",
  "number": "2.5",
  "title": "",
  "body": " Proof:             "
},
{
  "id": "shorttitlelowercase-3-6-4",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-6-4",
  "type": "Worksheet Exercise",
  "number": "2.6",
  "title": "",
  "body": "  If and , then find .   "
},
{
  "id": "shorttitlelowercase-3-7-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-7-1",
  "type": "Worksheet Exercise",
  "number": "2.7",
  "title": "",
  "body": "  If and , then find .   "
},
{
  "id": "shorttitlelowercase-3-7-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-7-2",
  "type": "Worksheet Exercise",
  "number": "2.8",
  "title": "",
  "body": "  If and , then find .   "
},
{
  "id": "thm-inclusion-exclusion-three",
  "level": "2",
  "url": "shorttitlelowercase-3.html#thm-inclusion-exclusion-three",
  "type": "Theorem",
  "number": "2.6",
  "title": "Inclusion-Exclusion Probability (Union of Three Events).",
  "body": " Inclusion-Exclusion Probability (Union of Three Events)   For any three events A, B, and C, (fill in)      "
},
{
  "id": "shorttitlelowercase-3-7-4",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-7-4",
  "type": "Worksheet Exercise",
  "number": "2.9",
  "title": "",
  "body": " Sketch of Proof:     "
},
{
  "id": "shorttitlelowercase-3-8-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-8-1",
  "type": "Worksheet Exercise",
  "number": "2.10",
  "title": "",
  "body": "  Suppose A and B are subsets of the sample space S. If , and , then find the following:                   Fill in the Venn diagram with the appropriate probabilities in each region.                               "
},
{
  "id": "shorttitlelowercase-3-9-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-9-1",
  "type": "Worksheet Exercise",
  "number": "2.11",
  "title": "",
  "body": "  Suppose A and B are subsets of the sample space S. If , , then find       "
},
{
  "id": "shorttitlelowercase-3-9-2",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-9-2",
  "type": "Worksheet Exercise",
  "number": "2.12",
  "title": "",
  "body": "  An insurance company looks at its auto insurance customers and finds that   all insure at least one car    85% insure more than one car    23% insure a sports car    17% insure more than one car, including a sports car    Find the probability that a customer selected at random insures exactly one car and it is not a sports car.   Hint : Let the sample space be the set of all people who insure at least one car. Let be the set of people insuring more than one car and be the set of people insuring a sports car. Draw a Venn diagram.    "
},
{
  "id": "shorttitlelowercase-3-9-3",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-9-3",
  "type": "Worksheet Exercise",
  "number": "2.13",
  "title": "",
  "body": "  A survey of 1000 people found that 400 people had a pet, 300 people had a child, and 200 people had both a pet and a child.     If a person is selected at random, find the probability that the person has either a pet or a child.      Is it reasonable to assume that all of the outcomes in your sample space are equally likely? Explain    "
},
{
  "id": "shorttitlelowercase-3-10-1",
  "level": "2",
  "url": "shorttitlelowercase-3.html#shorttitlelowercase-3-10-1",
  "type": "Worksheet Exercise",
  "number": "2.14",
  "title": "",
  "body": "  Two dice are rolled and the values shown on top are observed.     Write down a sample space for the experiment in such a way that each outcome in the sample space is equally likely.      What is the probability the sum of the two die is 7?      What is the probability the sum of the two die is at least 4?      What is the probability the sum of the two die is at most 11?    "
},
{
  "id": "shorttitlelowercase-4",
  "level": "1",
  "url": "shorttitlelowercase-4.html",
  "type": "Worksheet",
  "number": "3",
  "title": "Methods of Enumeration (1.2)",
  "body": "Methods of Enumeration (1.2)    Multiplication Principle: Suppose 2 experiments are performed, and . If has possible outcomes and has possible outcomes, then the composite experiment of performing followed by has possible outcomes.     Example Let be the experiment of selecting at random a pair of socks out of your drawer containing yellow(y), pink(p) and white(w) socks. Let be the experiment of selecting either black(bl) or grey(gr) shoes. Then the sample space for the experiment of doing followed by is all (sock,shoe) possible combinations.     List all outcomes in the sample space:      Alternatively we could model it with a tree diagram:        General Multiplication rule: If experiments has outcomes respectively after previous experiments have been performed, then the composite experiment of performing followed by , ... has the following number of possible outcomes:         Examples:      How many different digit phone numbers are possible if the first number cannot be a or ?      How many different license plates of the form LETTER LETTER LETTER DIGIT DIGIT DIGIT are there?      I have different pictures to hang on the wall. In how many different ways can I arrange them in a row?      In a class of students, how many ways are there to elect a president, vice president, and treasurer? (Assume no student can hold more than one office.)     More generally suppose we want to arrange different things in a row. How many ways?    Permutation (B:1.2.1)   A permutation is an arrangement of objects in a row where order matters.        The total number of permutations on different objects is:      If we had different things and wanted to arrange just of them in a row, we'd have this many ways:   We denote the number of such arrangements by     (B:1.2-2)   Each of the arrangements is called a permutation on objects taken at a time.       There are people in a race. How many finishing orders are there?       There are people in a race. How many ways to award first, second, and third place?     (B:1.2-3)   If objects are selected from a set of objects, and if the order of the selection is noted, then the selected set of objects is called           (B:1.2-4\/5)    Sampling with replacement occurs when an object is selected and then replaced before the next object is selected. Sampling without replacement occurs when an object is not replaced after it has been selected.     Examples:     A state lottery selects balls numbered one at a time. After each ball is selected, it is put back. How many possible outcomes are there? (Assume order matters)      Suppose in the above lottery the balls are not put back after being selected. How many possible outcomes are there? (Assume order matters)    We note that given different objects, the number of ordered samples of size is:  with replacement:    without replacement:    Example - Unordered sets     How many ways are there to select three people from the set         Denote by the number of unordered sets of size .  Then the number of ordered sets is     (B:1.2-6)   Each of the unordered subsets is called a        Examples:     A committee of is to be chosen from a group of people - how many ways?      How many different ways are there to deal a card hand from a standard card deck?       Back to probability. Let be the number of outcomes in event . If all outcomes in a sample space are equally likely, then the probability of an event is . So knowing how to count helps us compute probabilities.    A committee of is to be chosen from . What is the probability that will be chosen?      What is the probability that a random -card hand (from a standard card deck) consists of all diamonds?    Notation and Formulas     The number of permutations on distinct objects taken at a time is denoted by or and is given by .    For example, .      The number of combinations (unordered sets) of distinct objects taken at a time is denoted by , , or (read \"n choose r\") and is given by .    For example, .       "
},
{
  "id": "shorttitlelowercase-4-2-2",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-2-2",
  "type": "Worksheet Exercise",
  "number": "3.1",
  "title": "",
  "body": "   Example Let be the experiment of selecting at random a pair of socks out of your drawer containing yellow(y), pink(p) and white(w) socks. Let be the experiment of selecting either black(bl) or grey(gr) shoes. Then the sample space for the experiment of doing followed by is all (sock,shoe) possible combinations.     List all outcomes in the sample space:      Alternatively we could model it with a tree diagram:    "
},
{
  "id": "shorttitlelowercase-4-2-3",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-2-3",
  "type": "Worksheet Exercise",
  "number": "3.2",
  "title": "",
  "body": "   General Multiplication rule: If experiments has outcomes respectively after previous experiments have been performed, then the composite experiment of performing followed by , ... has the following number of possible outcomes:   "
},
{
  "id": "shorttitlelowercase-4-3-1",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-3-1",
  "type": "Worksheet Exercise",
  "number": "3.3",
  "title": "",
  "body": "   Examples:      How many different digit phone numbers are possible if the first number cannot be a or ?      How many different license plates of the form LETTER LETTER LETTER DIGIT DIGIT DIGIT are there?      I have different pictures to hang on the wall. In how many different ways can I arrange them in a row?      In a class of students, how many ways are there to elect a president, vice president, and treasurer? (Assume no student can hold more than one office.)    "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "shorttitlelowercase-4.html#def-permutation",
  "type": "Definition",
  "number": "3.1",
  "title": "Permutation (B:1.2.1).",
  "body": " Permutation (B:1.2.1)   A permutation is an arrangement of objects in a row where order matters.   "
},
{
  "id": "shorttitlelowercase-4-4-1",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-1",
  "type": "Worksheet Exercise",
  "number": "3.4",
  "title": "",
  "body": "  The total number of permutations on different objects is:   "
},
{
  "id": "shorttitlelowercase-4-4-2",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-2",
  "type": "Worksheet Exercise",
  "number": "3.5",
  "title": "",
  "body": "  If we had different things and wanted to arrange just of them in a row, we'd have this many ways:   We denote the number of such arrangements by   "
},
{
  "id": "perm-on-n-objects",
  "level": "2",
  "url": "shorttitlelowercase-4.html#perm-on-n-objects",
  "type": "Definition",
  "number": "3.2",
  "title": "(B:1.2-2).",
  "body": " (B:1.2-2)   Each of the arrangements is called a permutation on objects taken at a time.    "
},
{
  "id": "shorttitlelowercase-4-4-4",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-4",
  "type": "Worksheet Exercise",
  "number": "3.6",
  "title": "",
  "body": "  There are people in a race. How many finishing orders are there?    "
},
{
  "id": "shorttitlelowercase-4-4-5",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-4-5",
  "type": "Worksheet Exercise",
  "number": "3.7",
  "title": "",
  "body": "  There are people in a race. How many ways to award first, second, and third place?   "
},
{
  "id": "ordered-sample",
  "level": "2",
  "url": "shorttitlelowercase-4.html#ordered-sample",
  "type": "Definition",
  "number": "3.3",
  "title": "(B:1.2-3).",
  "body": " (B:1.2-3)   If objects are selected from a set of objects, and if the order of the selection is noted, then the selected set of objects is called       "
},
{
  "id": "sampling-with-without-replacement",
  "level": "2",
  "url": "shorttitlelowercase-4.html#sampling-with-without-replacement",
  "type": "Definition",
  "number": "3.4",
  "title": "(B:1.2-4\/5).",
  "body": " (B:1.2-4\/5)    Sampling with replacement occurs when an object is selected and then replaced before the next object is selected. Sampling without replacement occurs when an object is not replaced after it has been selected.   "
},
{
  "id": "shorttitlelowercase-4-5-3",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-5-3",
  "type": "Worksheet Exercise",
  "number": "3.8",
  "title": "",
  "body": "  A state lottery selects balls numbered one at a time. After each ball is selected, it is put back. How many possible outcomes are there? (Assume order matters)   "
},
{
  "id": "shorttitlelowercase-4-5-4",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-5-4",
  "type": "Worksheet Exercise",
  "number": "3.9",
  "title": "",
  "body": "  Suppose in the above lottery the balls are not put back after being selected. How many possible outcomes are there? (Assume order matters)   "
},
{
  "id": "shorttitlelowercase-4-5-9",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-5-9",
  "type": "Worksheet Exercise",
  "number": "3.10",
  "title": "",
  "body": "  How many ways are there to select three people from the set    "
},
{
  "id": "shorttitlelowercase-4-6-1",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-6-1",
  "type": "Worksheet Exercise",
  "number": "3.11",
  "title": "",
  "body": "  Denote by the number of unordered sets of size .  Then the number of ordered sets is   "
},
{
  "id": "unordered-subset",
  "level": "2",
  "url": "shorttitlelowercase-4.html#unordered-subset",
  "type": "Definition",
  "number": "3.5",
  "title": "(B:1.2-6).",
  "body": " (B:1.2-6)   Each of the unordered subsets is called a      "
},
{
  "id": "shorttitlelowercase-4-6-4",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-6-4",
  "type": "Worksheet Exercise",
  "number": "3.12",
  "title": "",
  "body": "  A committee of is to be chosen from a group of people - how many ways?   "
},
{
  "id": "shorttitlelowercase-4-6-5",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-6-5",
  "type": "Worksheet Exercise",
  "number": "3.13",
  "title": "",
  "body": "  How many different ways are there to deal a card hand from a standard card deck?   "
},
{
  "id": "shorttitlelowercase-4-7-2",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-7-2",
  "type": "Worksheet Exercise",
  "number": "3.14",
  "title": "",
  "body": "  A committee of is to be chosen from . What is the probability that will be chosen?   "
},
{
  "id": "shorttitlelowercase-4-7-3",
  "level": "2",
  "url": "shorttitlelowercase-4.html#shorttitlelowercase-4-7-3",
  "type": "Worksheet Exercise",
  "number": "3.15",
  "title": "",
  "body": "  What is the probability that a random -card hand (from a standard card deck) consists of all diamonds?   "
},
{
  "id": "Practice-counting-methods",
  "level": "1",
  "url": "Practice-counting-methods.html",
  "type": "Worksheet",
  "number": "4",
  "title": "Methods of Enumeration Practice and Summary (1.2)",
  "body": " Methods of Enumeration Practice and Summary (1.2)    Use the counting principles from this section to determine the number of ways an event can occur. For each problem consider whether order matters, whether repetition is allowed, and if you are sampling with or without replacement.     A 4-digit security code is created using the digits 0 through 9. Digits may be repeated, and the code cannot start with 0.  How many different codes are possible?        A committee of 3 students is chosen from a class of 12 students. How many different committees are possible if the order of the committee members does not matter?        In how many ways can I choose 4 sweaters from my collection of 8 to give to 4 of my friends?      In how many ways can I choose 4 sweaters from my collection of 8 to give to give to my friend Susan?      A restaurant offers 8 different toppings for pizza. How many different 3-topping pizzas are possible? (No duplicate toppings.)         A restaurant offers 8 different toppings for pizza. How many different pizzas are possible using 0 to 8 of the toppings? (No duplicate toppings.)       Show that       How many different ways are there to arrange the letters in the word MATH?      How many different ways are there to arrange the letters in the word WESTERN? Note that are two E's - if you switched the places of the two E's you couldn't tell the permutations apart. The permutations you can tell apart are called distinguishable permutations . Count the number of distinguishable permutations.      How many different (distinguishable) ways are there to arrange the letters in the word SUCCESS?      Suppose I have 10 candy bars - 6 are Twix and 4 are Snickers. How many different ways can I arrange these candy bars in a line?        Suppose you have objects where are of one type, are of another type,..., are of the -th type, where How many distinguishable permutations of the objects are there? Give a formula.    The above formula is called the multinomial coefficient and is denoted by     There are 3 people in the Smith family, 5 people in the Jones family, and 2 people in the McCall family.     How many ways are there to line up all the people to take a picture?      How many ways are there to line up all the people if the members of each family must stay together?       I have tubs of chocolate, vanilla, strawberry, and mint ice cream. How many ways can I make a bowl with 6 scoops of ice cream? (order doesn't matter)        A 5-card hand is to be dealt from a standard 52-card deck. Find the probability of getting each of the following hands. Note that by rank or face value, we mean the value showing on the card (A,2,3,4,5,6,7,8,9,10,J,Q,K)     One pair (one pair of cards with the same face value plus three cards of different face values).      Two pairs (two different pairs of cards with the same face values plus one card of a different face value).          Binomial Coefficients           Multinomial Coefficients   We saw in the in class examples that we if we have objects, of which are similar, are similar, are similar, .., similar where then the number of distinguishable permutations of the objects are    This is called a multinomial coefficient because it arises as the coefficient of in the expansion of    "
},
{
  "id": "counting-1",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-1",
  "type": "Worksheet Exercise",
  "number": "4.1",
  "title": "",
  "body": "  A 4-digit security code is created using the digits 0 through 9. Digits may be repeated, and the code cannot start with 0.  How many different codes are possible?     "
},
{
  "id": "counting-2",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-2",
  "type": "Worksheet Exercise",
  "number": "4.2",
  "title": "",
  "body": "  A committee of 3 students is chosen from a class of 12 students. How many different committees are possible if the order of the committee members does not matter?     "
},
{
  "id": "counting-3",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-3",
  "type": "Worksheet Exercise",
  "number": "4.3",
  "title": "",
  "body": "  In how many ways can I choose 4 sweaters from my collection of 8 to give to 4 of my friends?   "
},
{
  "id": "counting-4",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-4",
  "type": "Worksheet Exercise",
  "number": "4.4",
  "title": "",
  "body": "  In how many ways can I choose 4 sweaters from my collection of 8 to give to give to my friend Susan?   "
},
{
  "id": "counting-5",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-5",
  "type": "Worksheet Exercise",
  "number": "4.5",
  "title": "",
  "body": "  A restaurant offers 8 different toppings for pizza. How many different 3-topping pizzas are possible? (No duplicate toppings.)    "
},
{
  "id": "counting-6",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-6",
  "type": "Worksheet Exercise",
  "number": "4.6",
  "title": "",
  "body": "  A restaurant offers 8 different toppings for pizza. How many different pizzas are possible using 0 to 8 of the toppings? (No duplicate toppings.)    "
},
{
  "id": "counting-7",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-7",
  "type": "Worksheet Exercise",
  "number": "4.7",
  "title": "",
  "body": "  Show that    "
},
{
  "id": "counting-9",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-9",
  "type": "Worksheet Exercise",
  "number": "4.8",
  "title": "",
  "body": "  How many different ways are there to arrange the letters in the word MATH?   "
},
{
  "id": "counting-10",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-10",
  "type": "Worksheet Exercise",
  "number": "4.9",
  "title": "",
  "body": "  How many different ways are there to arrange the letters in the word WESTERN? Note that are two E's - if you switched the places of the two E's you couldn't tell the permutations apart. The permutations you can tell apart are called distinguishable permutations . Count the number of distinguishable permutations.   "
},
{
  "id": "counting-11",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-11",
  "type": "Worksheet Exercise",
  "number": "4.10",
  "title": "",
  "body": "  How many different (distinguishable) ways are there to arrange the letters in the word SUCCESS?   "
},
{
  "id": "counting-12",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-12",
  "type": "Worksheet Exercise",
  "number": "4.11",
  "title": "",
  "body": "  Suppose I have 10 candy bars - 6 are Twix and 4 are Snickers. How many different ways can I arrange these candy bars in a line?   "
},
{
  "id": "counting-13",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-13",
  "type": "Worksheet Exercise",
  "number": "4.12",
  "title": "",
  "body": "  Suppose you have objects where are of one type, are of another type,..., are of the -th type, where How many distinguishable permutations of the objects are there? Give a formula.   "
},
{
  "id": "counting-14",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-14",
  "type": "Worksheet Exercise",
  "number": "4.13",
  "title": "",
  "body": "  There are 3 people in the Smith family, 5 people in the Jones family, and 2 people in the McCall family.     How many ways are there to line up all the people to take a picture?      How many ways are there to line up all the people if the members of each family must stay together?    "
},
{
  "id": "counting-15",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-15",
  "type": "Worksheet Exercise",
  "number": "4.14",
  "title": "",
  "body": "  I have tubs of chocolate, vanilla, strawberry, and mint ice cream. How many ways can I make a bowl with 6 scoops of ice cream? (order doesn't matter)   "
},
{
  "id": "counting-16",
  "level": "2",
  "url": "Practice-counting-methods.html#counting-16",
  "type": "Worksheet Exercise",
  "number": "4.15",
  "title": "",
  "body": "  A 5-card hand is to be dealt from a standard 52-card deck. Find the probability of getting each of the following hands. Note that by rank or face value, we mean the value showing on the card (A,2,3,4,5,6,7,8,9,10,J,Q,K)     One pair (one pair of cards with the same face value plus three cards of different face values).      Two pairs (two different pairs of cards with the same face values plus one card of a different face value).    "
},
{
  "id": "Practice-counting-methods-6-1",
  "level": "2",
  "url": "Practice-counting-methods.html#Practice-counting-methods-6-1",
  "type": "Worksheet Exercise",
  "number": "4.16",
  "title": "",
  "body": "   Binomial Coefficients       "
},
{
  "id": "Practice-counting-methods-6-2",
  "level": "2",
  "url": "Practice-counting-methods.html#Practice-counting-methods-6-2",
  "type": "Worksheet Exercise",
  "number": "4.17",
  "title": "",
  "body": "   Multinomial Coefficients   We saw in the in class examples that we if we have objects, of which are similar, are similar, are similar, .., similar where then the number of distinguishable permutations of the objects are   "
},
{
  "id": "conditional-probability",
  "level": "1",
  "url": "conditional-probability.html",
  "type": "Worksheet",
  "number": "5",
  "title": "Conditional Probability (1.3)",
  "body": " Conditional Probability (1.3)     What is the probability that in three tosses of a coin, exactly are heads?      Suppose that you know that at least one of the three tosses was a head. Now what is the probability that exactly were heads?        Conditional Probability(B:1.3-1)   The conditional probability of an event , given that event has occurred, is defined by     Note: If , then             If are disjoint, then .   In other words, satisfies all of the rules of a probability function.    Suppose , , and .     Do you expect to be less than, greater than, or equal to ?      Find             Consider the current US House of Representatives ( congress). As of now there are Republicans and Democrats, Independent, and vacancies. Suppose on a particular bill, the votes were as follows:         Democrat  Republican  Independent    Yes  173  22  0    No  41  196  1       What is the probability that a Representative voted YES given that they were a Democrat?      What is the probability that a Representative was a Republican given that they voted YES?       Sometimes its actually easier to compute and use it to find other unknowns:      The previous calculation shows:    Multiplicaion Rule (B:1.3-2)   The probability that two events, and , both occur is given by the multiplication rule:       An urn contains red and blue balls. You draw two at random.     What is the probability that the first ball is red and the second is blue?      What is the probability that both balls are red?         A grade school boy has five blue and four white marbles in his left pocket and four blue and five white marbles in his right pocket. If he transfers one marble at random from his left to his right pocket, what is the probability of his then drawing a blue marble from his right pocket?  Let BL = blue from left, BR = blue from right, WL = white from left        Suppose .     Fill in the Venn Diagram with the correct probabilities in each region.         Find       Find        Two cards are dealt at random and without replacement from a standard 52 card deck.     What is the probability the second card is an Ace given the first card is an Ace?      What is the probability the first card is an Ace and the second is a four?      What is the probability the first card is an Ace and the second is a Heart? (Think about what the possible outcomes look like - this is similar to the marble in the pockets example)         Certain medical conditions are hard to diagnose with certainty but there are tests that can predict whether or not someone has or is likely to get the condition. Insurance companies and doctors debate the value and suggested frequency of these screening tests. The following table shows the results from 1000 people who had a diagnostic test for a disease and whether or not the person actually had the disease. A negative test result means the test indicates the person likely does NOT have the disease.        Each cell depicts  Did the person actually have the disease?    of people  YES  NO  TOTALS    Positive test result  7  69  76    Negative test result  1  923  924    Totals  8  992  1000       What is the probability that the person has the disease?      What is the probability the person had a positive test result?      What is the probability the test will come back positive given a person does not have the disease? (This is a false positive.)      What is the probability the test will come back positive given a person has the disease? (This is known as the sensitivity of the test.)      What is the probability the test will come back negative given a person does not have the disease? (This is known as the specificity of the test.)      What is the probability a person has the disease given the test came back positive?         What is the probability that two randomly selected people have the same birthday? Ignore leap years.      What is the probability that in a room of people, two share the same birthday? Ignore leap years. Hint: Think of the complementary event.      How many people must be in a room before the probability that two share a birthday (ignoring leap years) is greater than 50%?     "
},
{
  "id": "conditional-probability-2-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-2-1",
  "type": "Worksheet Exercise",
  "number": "5.1",
  "title": "",
  "body": "  What is the probability that in three tosses of a coin, exactly are heads?   "
},
{
  "id": "conditional-probability-2-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-2-2",
  "type": "Worksheet Exercise",
  "number": "5.2",
  "title": "",
  "body": "  Suppose that you know that at least one of the three tosses was a head. Now what is the probability that exactly were heads?   "
},
{
  "id": "conditional-probability-3-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-3-1",
  "type": "Worksheet Exercise",
  "number": "5.3",
  "title": "",
  "body": "  Conditional Probability(B:1.3-1)   The conditional probability of an event , given that event has occurred, is defined by    "
},
{
  "id": "conditional-probability-3-3",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-3-3",
  "type": "Worksheet Exercise",
  "number": "5.4",
  "title": "",
  "body": "  Suppose , , and .     Do you expect to be less than, greater than, or equal to ?      Find        "
},
{
  "id": "conditional-probability-4-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-4-1",
  "type": "Worksheet Exercise",
  "number": "5.5",
  "title": "",
  "body": "  Consider the current US House of Representatives ( congress). As of now there are Republicans and Democrats, Independent, and vacancies. Suppose on a particular bill, the votes were as follows:         Democrat  Republican  Independent    Yes  173  22  0    No  41  196  1       What is the probability that a Representative voted YES given that they were a Democrat?      What is the probability that a Representative was a Republican given that they voted YES?    "
},
{
  "id": "conditional-probability-4-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-4-2",
  "type": "Worksheet Exercise",
  "number": "5.6",
  "title": "",
  "body": "  Sometimes its actually easier to compute and use it to find other unknowns:   "
},
{
  "id": "conditional-probability-5-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-5-2",
  "type": "Worksheet Exercise",
  "number": "5.7",
  "title": "",
  "body": "  Multiplicaion Rule (B:1.3-2)   The probability that two events, and , both occur is given by the multiplication rule:    "
},
{
  "id": "conditional-probability-5-3",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-5-3",
  "type": "Worksheet Exercise",
  "number": "5.8",
  "title": "",
  "body": "  An urn contains red and blue balls. You draw two at random.     What is the probability that the first ball is red and the second is blue?      What is the probability that both balls are red?    "
},
{
  "id": "conditional-probability-6-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-6-1",
  "type": "Worksheet Exercise",
  "number": "5.9",
  "title": "",
  "body": "  A grade school boy has five blue and four white marbles in his left pocket and four blue and five white marbles in his right pocket. If he transfers one marble at random from his left to his right pocket, what is the probability of his then drawing a blue marble from his right pocket?  Let BL = blue from left, BR = blue from right, WL = white from left   "
},
{
  "id": "conditional-probability-7-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-7-1",
  "type": "Worksheet Exercise",
  "number": "5.10",
  "title": "",
  "body": "  Suppose .     Fill in the Venn Diagram with the correct probabilities in each region.         Find       Find     "
},
{
  "id": "conditional-probability-7-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-7-2",
  "type": "Worksheet Exercise",
  "number": "5.11",
  "title": "",
  "body": "  Two cards are dealt at random and without replacement from a standard 52 card deck.     What is the probability the second card is an Ace given the first card is an Ace?      What is the probability the first card is an Ace and the second is a four?      What is the probability the first card is an Ace and the second is a Heart? (Think about what the possible outcomes look like - this is similar to the marble in the pockets example)    "
},
{
  "id": "conditional-probability-8-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-8-1",
  "type": "Worksheet Exercise",
  "number": "5.12",
  "title": "",
  "body": "  Certain medical conditions are hard to diagnose with certainty but there are tests that can predict whether or not someone has or is likely to get the condition. Insurance companies and doctors debate the value and suggested frequency of these screening tests. The following table shows the results from 1000 people who had a diagnostic test for a disease and whether or not the person actually had the disease. A negative test result means the test indicates the person likely does NOT have the disease.        Each cell depicts  Did the person actually have the disease?    of people  YES  NO  TOTALS    Positive test result  7  69  76    Negative test result  1  923  924    Totals  8  992  1000       What is the probability that the person has the disease?      What is the probability the person had a positive test result?      What is the probability the test will come back positive given a person does not have the disease? (This is a false positive.)      What is the probability the test will come back positive given a person has the disease? (This is known as the sensitivity of the test.)      What is the probability the test will come back negative given a person does not have the disease? (This is known as the specificity of the test.)      What is the probability a person has the disease given the test came back positive?    "
},
{
  "id": "conditional-probability-9-1",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-9-1",
  "type": "Worksheet Exercise",
  "number": "5.13",
  "title": "",
  "body": "  What is the probability that two randomly selected people have the same birthday? Ignore leap years.   "
},
{
  "id": "conditional-probability-9-2",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-9-2",
  "type": "Worksheet Exercise",
  "number": "5.14",
  "title": "",
  "body": "  What is the probability that in a room of people, two share the same birthday? Ignore leap years. Hint: Think of the complementary event.   "
},
{
  "id": "conditional-probability-9-3",
  "level": "2",
  "url": "conditional-probability.html#conditional-probability-9-3",
  "type": "Worksheet Exercise",
  "number": "5.15",
  "title": "",
  "body": "  How many people must be in a room before the probability that two share a birthday (ignoring leap years) is greater than 50%?   "
},
{
  "id": "independent-events",
  "level": "1",
  "url": "independent-events.html",
  "type": "Worksheet",
  "number": "6",
  "title": "Independent Events (1.4)",
  "body": " Independent Events (1.4)   Two events and are said to be events if the outcome of one does not change the probability of occurrence of the other.    Examples Non-examples     Suppose you toss a coin twice. Let be the event that the first toss is a head. Let be the event that the second toss is a head. Are and independent?      Suppose you draw two cards from a deck without replacement. Let be the event that the first card is a Jack. Let be the event that the second card is a Jack. Are and independent events?      Suppose in the second example we replace the first card before we draw the second. Are and independent?       Connecting this to the ideas from the last section we can see that and are independent if       Independent Events Definition (B:1.4-1)   Events and are independent if and only if     If and are not independent, we say and are events.      The sample space for rolling a red and green 6-sided die (red,green) is as follows:   >   Let 2 on the red die and sum of the dice is odd . Are and independent events?      Let 4 on red die and sum of the dice is 10 Are and independent?        Independent Events Theorem (B:1.4-1)   If and are independent events, then the following pairs of events are also independent:            Proof of (a):       Mutually Independent Events Definition (B:1.4-2)   Events , , and are mutually independent if and only if the following two conditions hold:      , , and are pairwise independent, that is            We can extend the definition to more than events, but you need to check all pairs, triples, etc. when you extend it. If the context is clear, then we often just say independent instead of mutually independent .      The probability that my internet will fail (F) at my house on any given day is . If we assume that the probability of failure on any day is independent of any other day, find the following:     What is the probability that my internet will fail on Monday and Tuesday, but not on Wednesday or Thursday?      What is the probability that my internet will fail at least one time in the next four days?      What is the probability my internet will fail two of the next five days?         Suppose that and . Are and independent? Explain.      Suppose that and . Are and independent? Explain.      Suppose and are independent with and . Find the following:                           Prove part (c) of the Independent Events Theorem (B:1.4-1) using the definition of independence. You may use parts (a) and (b) of the theorem in your proof.        A rocket has built-in redundant systems. In this system, if component fails, then it is bypassed and component is used. If component fails, it is bypassed and component is used. The system only fails if all of the components and fail. Suppose the probability that any given component is faulty (and would fail if needed) is and assume that the failures of components are mutually independent events.     What is the probability that one of the components is faulty (but not the other 2)?      What is the probability that two of the components are faulty (but not the third)?      What is the probability that whole the system fails?      Suppose instead there are 5 components ( . What is the probability that exactly two are faulty?      "
},
{
  "id": "independent-events-examples",
  "level": "2",
  "url": "independent-events.html#independent-events-examples",
  "type": "Worksheet Exercise",
  "number": "6.1",
  "title": "",
  "body": "  Examples Non-examples     Suppose you toss a coin twice. Let be the event that the first toss is a head. Let be the event that the second toss is a head. Are and independent?      Suppose you draw two cards from a deck without replacement. Let be the event that the first card is a Jack. Let be the event that the second card is a Jack. Are and independent events?      Suppose in the second example we replace the first card before we draw the second. Are and independent?    "
},
{
  "id": "independent-events-2-3",
  "level": "2",
  "url": "independent-events.html#independent-events-2-3",
  "type": "Worksheet Exercise",
  "number": "6.2",
  "title": "",
  "body": "  Connecting this to the ideas from the last section we can see that and are independent if    "
},
{
  "id": "independent-events-2-4",
  "level": "2",
  "url": "independent-events.html#independent-events-2-4",
  "type": "Worksheet Exercise",
  "number": "6.3",
  "title": "",
  "body": "  Independent Events Definition (B:1.4-1)   Events and are independent if and only if    "
},
{
  "id": "independent-events-3-1",
  "level": "2",
  "url": "independent-events.html#independent-events-3-1",
  "type": "Worksheet Exercise",
  "number": "6.4",
  "title": "",
  "body": "  The sample space for rolling a red and green 6-sided die (red,green) is as follows:   >   Let 2 on the red die and sum of the dice is odd . Are and independent events?      Let 4 on red die and sum of the dice is 10 Are and independent?    "
},
{
  "id": "independent-events-theorem",
  "level": "2",
  "url": "independent-events.html#independent-events-theorem",
  "type": "Theorem",
  "number": "6.2",
  "title": "Independent Events Theorem (B:1.4-1).",
  "body": " Independent Events Theorem (B:1.4-1)   If and are independent events, then the following pairs of events are also independent:        "
},
{
  "id": "independent-events-4-2",
  "level": "2",
  "url": "independent-events.html#independent-events-4-2",
  "type": "Worksheet Exercise",
  "number": "6.5",
  "title": "",
  "body": "   Proof of (a):    "
},
{
  "id": "independent-events-4-3",
  "level": "2",
  "url": "independent-events.html#independent-events-4-3",
  "type": "Worksheet Exercise",
  "number": "6.6",
  "title": "",
  "body": "  Mutually Independent Events Definition (B:1.4-2)   Events , , and are mutually independent if and only if the following two conditions hold:      , , and are pairwise independent, that is           "
},
{
  "id": "independent-events-5-1",
  "level": "2",
  "url": "independent-events.html#independent-events-5-1",
  "type": "Worksheet Exercise",
  "number": "6.7",
  "title": "",
  "body": "  The probability that my internet will fail (F) at my house on any given day is . If we assume that the probability of failure on any day is independent of any other day, find the following:     What is the probability that my internet will fail on Monday and Tuesday, but not on Wednesday or Thursday?      What is the probability that my internet will fail at least one time in the next four days?      What is the probability my internet will fail two of the next five days?    "
},
{
  "id": "independent-events-6-1",
  "level": "2",
  "url": "independent-events.html#independent-events-6-1",
  "type": "Worksheet Exercise",
  "number": "6.8",
  "title": "",
  "body": "  Suppose that and . Are and independent? Explain.   "
},
{
  "id": "independent-events-6-2",
  "level": "2",
  "url": "independent-events.html#independent-events-6-2",
  "type": "Worksheet Exercise",
  "number": "6.9",
  "title": "",
  "body": "  Suppose that and . Are and independent? Explain.   "
},
{
  "id": "independent-events-6-3",
  "level": "2",
  "url": "independent-events.html#independent-events-6-3",
  "type": "Worksheet Exercise",
  "number": "6.10",
  "title": "",
  "body": "  Suppose and are independent with and . Find the following:                        "
},
{
  "id": "independent-events-6-4",
  "level": "2",
  "url": "independent-events.html#independent-events-6-4",
  "type": "Worksheet Exercise",
  "number": "6.11",
  "title": "",
  "body": "  Prove part (c) of the Independent Events Theorem (B:1.4-1) using the definition of independence. You may use parts (a) and (b) of the theorem in your proof.   "
},
{
  "id": "independent-events-7-1",
  "level": "2",
  "url": "independent-events.html#independent-events-7-1",
  "type": "Worksheet Exercise",
  "number": "6.12",
  "title": "",
  "body": "  A rocket has built-in redundant systems. In this system, if component fails, then it is bypassed and component is used. If component fails, it is bypassed and component is used. The system only fails if all of the components and fail. Suppose the probability that any given component is faulty (and would fail if needed) is and assume that the failures of components are mutually independent events.     What is the probability that one of the components is faulty (but not the other 2)?      What is the probability that two of the components are faulty (but not the third)?      What is the probability that whole the system fails?      Suppose instead there are 5 components ( . What is the probability that exactly two are faulty?    "
},
{
  "id": "bayes-theorem",
  "level": "1",
  "url": "bayes-theorem.html",
  "type": "Worksheet",
  "number": "7",
  "title": "Bayes’ Theorem (1.5)",
  "body": " Bayes' Theorem (1.5)     There are three bowls:   Bowl ( ) contains red and white chips    Bowl ( ) contains red and white chips    Bowl ( ) contains red and white chips   Suppose a chip is chosen as follows: Choose a bowl, choose a chip. Further suppose the probability of choosing each bowl is as follows:                      What is the probability of getting a red chip given that bowl 1 was chosen ( )? (recall this is conditional probability)      What is the probability of getting a red chip given that bowl 2 was chosen?      What is the probability of getting a red chip given that bowl 3 was chosen?      What is the probability of getting a red chip?       Now suppose we know that a red chip was drawn. Does knowing the outcome of the experiment change any of these probabilities? Which bowl do you think the chip most likely came from?         We would like to compute the conditional probability that bowl three was chosen given the outcome of the experiment was red : . This probability is called the          Bayes' Theorem These ideas generalize: Suppose that events are mutually exclusive and exhaustive (Recall that this means that their union is the whole sample space and no two sets overlap) and is an event:     Then any event A can be written as a union of mutually exclusive sets:        At a hospital emergency room patients are classified and it is found that are classified as \"critical'', are classified as \"serious'' and are classified as \"stable''. Of those classified as critical, die, of those classified as serious, die, and of those classified as stable, die. Given that a patient dies, what is the probability that they were classified as critical?  Let C = classified critical; S = classified serious; St=classified stable; D=patient dies        During a blackout people are arrested on suspicion of looting. Each person takes a polygraph test. Suppose it is known that the results of the polygraph are reliable when administered to a guilty person and reliable when given to an innocent person. Further suppose we know that the probability that any given suspect is guilty is . A random suspect is tested and the polygraph result says that the person is guilty. Find the probability that the suspect is actually innocent.  Let PG = polygraph predicted guilt; PI = polygraph predicted innocence; G = the person is guilty; I = the person is innocent        It rains a lot in Oregon. Of the last 365 days, it was cloudy or rainy in the morning on 220 of those days and sunny in the morning on the others. Of the days that started out cloudy or rainy, it rained for more than 3 hours during the day on 150 of those days. Of the days that started out sunny, it rained for more than 3 hours during the day on 50 of those days. Suppose we choose one of the last 365 days at random and find that it rained more than 3 hours that day. What is the conditional probability that the day started out sunny?      Assume that a teacher of a Spanish class knows the following correlation between High School GPA and the probability of getting an A in their class. Further they know what fraction of their class had a particular HS GPA.   Given that a particular student got an A, what is the probability that the student's high school GPA was in the 3.0-4.0 range?        A certain disease is known to occur in 1 in 1000 people. A test for the disease indicates the presence of the disease (a positive test) 95% of the time when the disease is present and the presence of the disease 4% of the time when the disease is not present.     This test is given to a random person in the population and they test positive for the disease. What is the probability that they actually have the disease?      This test is given to a random person in the population and they test negative for the disease. What is the probability that they actually do not have the disease?      "
},
{
  "id": "bayes-theorem-2-1",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-2-1",
  "type": "Worksheet Exercise",
  "number": "7.1",
  "title": "",
  "body": "  There are three bowls:   Bowl ( ) contains red and white chips    Bowl ( ) contains red and white chips    Bowl ( ) contains red and white chips   Suppose a chip is chosen as follows: Choose a bowl, choose a chip. Further suppose the probability of choosing each bowl is as follows:                      What is the probability of getting a red chip given that bowl 1 was chosen ( )? (recall this is conditional probability)      What is the probability of getting a red chip given that bowl 2 was chosen?      What is the probability of getting a red chip given that bowl 3 was chosen?      What is the probability of getting a red chip?       Now suppose we know that a red chip was drawn. Does knowing the outcome of the experiment change any of these probabilities? Which bowl do you think the chip most likely came from?    "
},
{
  "id": "bayes-theorem-3-1",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-3-1",
  "type": "Worksheet Exercise",
  "number": "7.2",
  "title": "",
  "body": "  We would like to compute the conditional probability that bowl three was chosen given the outcome of the experiment was red : . This probability is called the      "
},
{
  "id": "bayes-theorem-3-2",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-3-2",
  "type": "Worksheet Exercise",
  "number": "7.3",
  "title": "",
  "body": "   Bayes' Theorem These ideas generalize: Suppose that events are mutually exclusive and exhaustive (Recall that this means that their union is the whole sample space and no two sets overlap) and is an event:     Then any event A can be written as a union of mutually exclusive sets:   "
},
{
  "id": "bayes-theorem-4-1",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-4-1",
  "type": "Worksheet Exercise",
  "number": "7.4",
  "title": "",
  "body": "  At a hospital emergency room patients are classified and it is found that are classified as \"critical'', are classified as \"serious'' and are classified as \"stable''. Of those classified as critical, die, of those classified as serious, die, and of those classified as stable, die. Given that a patient dies, what is the probability that they were classified as critical?  Let C = classified critical; S = classified serious; St=classified stable; D=patient dies   "
},
{
  "id": "bayes-theorem-5-1",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-5-1",
  "type": "Worksheet Exercise",
  "number": "7.5",
  "title": "",
  "body": "  During a blackout people are arrested on suspicion of looting. Each person takes a polygraph test. Suppose it is known that the results of the polygraph are reliable when administered to a guilty person and reliable when given to an innocent person. Further suppose we know that the probability that any given suspect is guilty is . A random suspect is tested and the polygraph result says that the person is guilty. Find the probability that the suspect is actually innocent.  Let PG = polygraph predicted guilt; PI = polygraph predicted innocence; G = the person is guilty; I = the person is innocent   "
},
{
  "id": "bayes-theorem-6-1",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-6-1",
  "type": "Worksheet Exercise",
  "number": "7.6",
  "title": "",
  "body": "  It rains a lot in Oregon. Of the last 365 days, it was cloudy or rainy in the morning on 220 of those days and sunny in the morning on the others. Of the days that started out cloudy or rainy, it rained for more than 3 hours during the day on 150 of those days. Of the days that started out sunny, it rained for more than 3 hours during the day on 50 of those days. Suppose we choose one of the last 365 days at random and find that it rained more than 3 hours that day. What is the conditional probability that the day started out sunny?   "
},
{
  "id": "bayes-theorem-6-2",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-6-2",
  "type": "Worksheet Exercise",
  "number": "7.7",
  "title": "",
  "body": "  Assume that a teacher of a Spanish class knows the following correlation between High School GPA and the probability of getting an A in their class. Further they know what fraction of their class had a particular HS GPA.   Given that a particular student got an A, what is the probability that the student's high school GPA was in the 3.0-4.0 range?   "
},
{
  "id": "bayes-theorem-7-1",
  "level": "2",
  "url": "bayes-theorem.html#bayes-theorem-7-1",
  "type": "Worksheet Exercise",
  "number": "7.8",
  "title": "",
  "body": "  A certain disease is known to occur in 1 in 1000 people. A test for the disease indicates the presence of the disease (a positive test) 95% of the time when the disease is present and the presence of the disease 4% of the time when the disease is not present.     This test is given to a random person in the population and they test positive for the disease. What is the probability that they actually have the disease?      This test is given to a random person in the population and they test negative for the disease. What is the probability that they actually do not have the disease?    "
},
{
  "id": "random-variables-discrete",
  "level": "1",
  "url": "random-variables-discrete.html",
  "type": "Worksheet",
  "number": "8",
  "title": "Random Variables of the Discrete Type (2.1)",
  "body": " Random Variables of the Discrete Type (2.1)    Random Variable Definition (2.1-1)   Let be the sample space for a random experiment. A function that assigns to each exactly one real number is called a Random Variable (RV) . The space of is the set of real numbers .    Notation: Typically, we use capital letters to denote random variables and lower case letters to denote a value the random variable can take on. For example, is a random variable and is a value of .     Example: Three balls are randomly chosen without replacement from an urn containing white, red, and black balls.      Let be a random variable with one-dimensional space where is a subset of the real numbers. If contains a countable number of points (this means we can list them out in an order, or equivalently put them into a one-to-one correspondence with the positive integers) then we say is a random variable of the type, or that is a random variable.    Note that now we are calling the space for the random variable . In other words we will just think about the sample space in terms of the possible outcomes for , the measurement under consideration.     Probability Mass Function (pmf) (2.1-2)   For a discrete R.V. , we define the probability mass function (pmf) , , of by for all in as a function that satisfies the following properties:         Note: We assume that if then and we sometimes call the support of .    Cumulative Distribution Function (cdf)   For a discrete R.V. , we define the cumulative distribution function (cdf) , , of by     We also sometimes just call the cdf the distribution function of .   Examples:     Flip a coin. Let if its heads and if its tails. Find the pmf of .        Roll a fair, sided die. Let be the number on top.     What is the pmf of ?      Find .      Definiton: If the pmf of is constant, then is said to have a distribution.    Suppose has a uniform distribution on .     Find the pmf of .      Find the cdf of .         Roll a fair, 8=sided die. Let be the number on top.     Find the pmf and cdf of .      What is the probability that a is showing on top?      What is the probability that the value is less than 4?      What is the probability that the value is at least 2?       Now let's consider a non-uniform example:    Suppose there are winning lottery tickets in a stack of . Draw at random without replacement. Let be the number of winning lottery tickets.     What is the space of ?      Find .      Find the probability that at least one is a winner.       Draw cards at random from a standard card deck. Let be the number of hearts. What is the space of ? Find the pmf of .         Definition: In a collection of objects, suppose that are alike and are alike so that . Suppose we draw at random without replacement. Let be the number of type . If we assume that each of the ways of selecting objects from has the same probability, then we say has a distribution. Further, the pmf of is:     Quick Check: Determine if the following describes a uniform, hypergeometric, or neither random variable . If uniform or hypergeometric, give the pmf of .    An urn contains red and white chips. You reach in and draw chips without replacement. Let be the number of red chips.      A coin is flipped. Let if it is heads, if it is tails.        A coin is flipped four times. Let be the number of heads.      There are people in a class, of which are freshman, are sophomores, and are juniors. Five people are selected at random and is the number that are freshman.     Displays of Distributions: A histogram is a good way to display the distribution of a random variable (how the probabilities are distributed over all possible outcomes). List each point in the space of on the x axis and then put a bar of height over it.    Make a sketch of the probability histogram for a R.V. with a uniform distribution over       The probability distribution histogram for a hypergeometric distribution changes depending on the values of and :    If we don't know how to compute the pmf we might make a histogram where the heights of the bars are the relative frequency of the outcomes in repeated trials of the experiment.   A line graph is similar to a histogram but instead of a bar, just draw a vertical line above up to the height of .         A coin is tossed two times. Let be the number of heads.     What is the space of ?      Find the pmf for (recall this just means find for all possible outcomes of ). Verify the sum of all values of is .      Find .       What value does need to be to make this a valid pmf for a random variable on          For each of the following determine if the variable described has a uniform, hypergeometric, or neither distribution. If uniform or hypergeometric, write down the pmf for (include the support\/space of (values of the pmf that are not 0 (think domain)).     In a carton of eggs, are cracked. eggs are selected at random. Let be the number cracked.      Each question on a multiple choice test has 4 possible answers. Your randomly guess the answer to each question. There are 5 such questions on the test. Let be the number of questions you get correct.      A person is chosen at random among all people who own one cell phone. Let be the last digit of their cell phone number.         In a carton of eggs, are cracked. eggs are selected at random. Let be the number cracked. For each part, first write the question as or for the correct value of , then solve. Recall that and .     Find the probability that 3 eggs are cracked.      Find the probability that no more than is cracked.      Find the probability that at least one is cracked.      "
},
{
  "id": "random-variable-definition",
  "level": "2",
  "url": "random-variables-discrete.html#random-variable-definition",
  "type": "Definition",
  "number": "8.1",
  "title": "Random Variable Definition (2.1-1).",
  "body": " Random Variable Definition (2.1-1)   Let be the sample space for a random experiment. A function that assigns to each exactly one real number is called a Random Variable (RV) . The space of is the set of real numbers .   "
},
{
  "id": "random-variables-discrete-2-3",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-2-3",
  "type": "Worksheet Exercise",
  "number": "8.1",
  "title": "",
  "body": "   Example: Three balls are randomly chosen without replacement from an urn containing white, red, and black balls.   "
},
{
  "id": "discrete-random-variable-definition",
  "level": "2",
  "url": "random-variables-discrete.html#discrete-random-variable-definition",
  "type": "Definition",
  "number": "8.2",
  "title": "",
  "body": "  Let be a random variable with one-dimensional space where is a subset of the real numbers. If contains a countable number of points (this means we can list them out in an order, or equivalently put them into a one-to-one correspondence with the positive integers) then we say is a random variable of the type, or that is a random variable.   "
},
{
  "id": "def-pmf",
  "level": "2",
  "url": "random-variables-discrete.html#def-pmf",
  "type": "Definition",
  "number": "8.3",
  "title": "Probability Mass Function (pmf) (2.1-2).",
  "body": " Probability Mass Function (pmf) (2.1-2)   For a discrete R.V. , we define the probability mass function (pmf) , , of by for all in as a function that satisfies the following properties:        "
},
{
  "id": "random-variables-discrete-3-3",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-3-3",
  "type": "Worksheet Exercise",
  "number": "8.2",
  "title": "",
  "body": "  Cumulative Distribution Function (cdf)   For a discrete R.V. , we define the cumulative distribution function (cdf) , , of by    "
},
{
  "id": "random-variables-discrete-3-6",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-3-6",
  "type": "Worksheet Exercise",
  "number": "8.3",
  "title": "",
  "body": "  Flip a coin. Let if its heads and if its tails. Find the pmf of .   "
},
{
  "id": "random-variables-discrete-4-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-4-1",
  "type": "Worksheet Exercise",
  "number": "8.4",
  "title": "",
  "body": "  Roll a fair, sided die. Let be the number on top.     What is the pmf of ?      Find .    "
},
{
  "id": "random-variables-discrete-4-3",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-4-3",
  "type": "Worksheet Exercise",
  "number": "8.5",
  "title": "",
  "body": "  Suppose has a uniform distribution on .     Find the pmf of .      Find the cdf of .    "
},
{
  "id": "random-variables-discrete-5-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-5-1",
  "type": "Worksheet Exercise",
  "number": "8.6",
  "title": "",
  "body": "  Roll a fair, 8=sided die. Let be the number on top.     Find the pmf and cdf of .      What is the probability that a is showing on top?      What is the probability that the value is less than 4?      What is the probability that the value is at least 2?    "
},
{
  "id": "random-variables-discrete-6-2",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-6-2",
  "type": "Worksheet Exercise",
  "number": "8.7",
  "title": "",
  "body": "  Suppose there are winning lottery tickets in a stack of . Draw at random without replacement. Let be the number of winning lottery tickets.     What is the space of ?      Find .      Find the probability that at least one is a winner.    "
},
{
  "id": "random-variables-discrete-6-3",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-6-3",
  "type": "Worksheet Exercise",
  "number": "8.8",
  "title": "",
  "body": "  Draw cards at random from a standard card deck. Let be the number of hearts. What is the space of ? Find the pmf of .   "
},
{
  "id": "random-variables-discrete-7-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-7-1",
  "type": "Worksheet Exercise",
  "number": "8.9",
  "title": "",
  "body": "   Definition: In a collection of objects, suppose that are alike and are alike so that . Suppose we draw at random without replacement. Let be the number of type . If we assume that each of the ways of selecting objects from has the same probability, then we say has a distribution. Further, the pmf of is:   "
},
{
  "id": "random-variables-discrete-7-3",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-7-3",
  "type": "Worksheet Exercise",
  "number": "8.10",
  "title": "",
  "body": "  An urn contains red and white chips. You reach in and draw chips without replacement. Let be the number of red chips.   "
},
{
  "id": "random-variables-discrete-7-4",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-7-4",
  "type": "Worksheet Exercise",
  "number": "8.11",
  "title": "",
  "body": "  A coin is flipped. Let if it is heads, if it is tails.   "
},
{
  "id": "random-variables-discrete-8-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-8-1",
  "type": "Worksheet Exercise",
  "number": "8.12",
  "title": "",
  "body": "  A coin is flipped four times. Let be the number of heads.   "
},
{
  "id": "random-variables-discrete-8-2",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-8-2",
  "type": "Worksheet Exercise",
  "number": "8.13",
  "title": "",
  "body": "  There are people in a class, of which are freshman, are sophomores, and are juniors. Five people are selected at random and is the number that are freshman.   "
},
{
  "id": "random-variables-discrete-8-4",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-8-4",
  "type": "Worksheet Exercise",
  "number": "8.14",
  "title": "",
  "body": "  Make a sketch of the probability histogram for a R.V. with a uniform distribution over    "
},
{
  "id": "random-variables-discrete-10-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-10-1",
  "type": "Worksheet Exercise",
  "number": "8.15",
  "title": "",
  "body": "  A coin is tossed two times. Let be the number of heads.     What is the space of ?      Find the pmf for (recall this just means find for all possible outcomes of ). Verify the sum of all values of is .      Find .    "
},
{
  "id": "random-variables-discrete-10-2",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-10-2",
  "type": "Worksheet Exercise",
  "number": "8.16",
  "title": "",
  "body": "  What value does need to be to make this a valid pmf for a random variable on     "
},
{
  "id": "random-variables-discrete-11-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-11-1",
  "type": "Worksheet Exercise",
  "number": "8.17",
  "title": "",
  "body": "  For each of the following determine if the variable described has a uniform, hypergeometric, or neither distribution. If uniform or hypergeometric, write down the pmf for (include the support\/space of (values of the pmf that are not 0 (think domain)).     In a carton of eggs, are cracked. eggs are selected at random. Let be the number cracked.      Each question on a multiple choice test has 4 possible answers. Your randomly guess the answer to each question. There are 5 such questions on the test. Let be the number of questions you get correct.      A person is chosen at random among all people who own one cell phone. Let be the last digit of their cell phone number.    "
},
{
  "id": "random-variables-discrete-12-1",
  "level": "2",
  "url": "random-variables-discrete.html#random-variables-discrete-12-1",
  "type": "Worksheet Exercise",
  "number": "8.18",
  "title": "",
  "body": "  In a carton of eggs, are cracked. eggs are selected at random. Let be the number cracked. For each part, first write the question as or for the correct value of , then solve. Recall that and .     Find the probability that 3 eggs are cracked.      Find the probability that no more than is cracked.      Find the probability that at least one is cracked.    "
},
{
  "id": "expected-value",
  "level": "1",
  "url": "expected-value.html",
  "type": "Worksheet",
  "number": "9",
  "title": "Mathematical Expectation (2.2)",
  "body": " Mathematical Expectation (2.2)   One of the most important concepts in probability theory is the expected value of a random variable. One can think of expected value as follows: If we perform an experiment numerous times, the average result is the expected value (arithmetic mean).    Suppose we flip a fair coin and let if a heads appears and if tails. What does your intuition tell you the expected value of should be if the coin is flipped repeatedly?     Expected Value (B:2.2-1)   If is a discrete random variable, having a probability mass function and space , and is any function on , so that exists, then expected value or mathematical expectation of , denoted is         Often we are just looking at       Find , where is the outcome when we roll a fair die.        We play a game where a fair coin is flipped and if a heads appear we get and if tails appears we pay . Let be the payment made on each game. What is the expected value of .      We play a game where a fair die is rolled. If it comes up you win , if it comes up or you win , otherwise you pay . What is the expected value of the game?    Notes:    The expected value of a random variable is not necessarily a value that the random variable can take on.    Let be the expected payment from a game. The game is called fair if .     Properties of Expected Value (B:2.2-1)   If the mathematical expectation exists, then it satisfies the following properties:      where is a constant    If is a discrete random variable and is a constant, then     If and are constants and and are functions of , then             Proofs :      Let denote a random variable that takes on any of the values with pmf Compute directly and using Theorem 2.2-1.        A game is played where you toss a coin. If it comes up heads you get , if it comes up tails you pay . Let be the payment of the game (amount you win or lose).     What is the space of ?      What is the pmf of ?      What is ?      What does mean? Does the value you found make sense? Why?       Let denote a random variable that takes on any of the values with pmf Compute directly and using Theorem 2.2-1.        Suppose in a stack of lottery tickets, are winners. You reach in and grab two tickets at random. Let be the number of winning tickets. Find the space of , the pmf of and .     What is the space of ?      What is the pmf of ?      What is ?      What does mean? Does the value you found make sense? Why?       For these problems, make a guess for the expected value of the random variable . You do not need to show any work.     A CD has songs. You like of them and don't like of them. Play songs chosen at random and let be the number of songs that you like. Make a guess for .      A store has cartons of eggs. Four of these cartons contain cracked eggs. You grab five cartons of eggs at random without checking. Let be the number of cartons that contain cracked eggs. Make a guess for .         Suppose is a R.V. with a hypergeometric distribution. objects ( alike and alike) and suppose you choose at random. Then we know that so: We will compute .[See slides on Canvas page if you don't to take notes.]    Conclusion:    "
},
{
  "id": "expected-value-2-2",
  "level": "2",
  "url": "expected-value.html#expected-value-2-2",
  "type": "Worksheet Exercise",
  "number": "9.1",
  "title": "",
  "body": "  Suppose we flip a fair coin and let if a heads appears and if tails. What does your intuition tell you the expected value of should be if the coin is flipped repeatedly?   "
},
{
  "id": "def-expected-value",
  "level": "2",
  "url": "expected-value.html#def-expected-value",
  "type": "Definition",
  "number": "9.1",
  "title": "Expected Value (B:2.2-1).",
  "body": " Expected Value (B:2.2-1)   If is a discrete random variable, having a probability mass function and space , and is any function on , so that exists, then expected value or mathematical expectation of , denoted is      "
},
{
  "id": "expected-value-2-4",
  "level": "2",
  "url": "expected-value.html#expected-value-2-4",
  "type": "Worksheet Exercise",
  "number": "9.2",
  "title": "",
  "body": "  Often we are just looking at    "
},
{
  "id": "expected-value-2-5",
  "level": "2",
  "url": "expected-value.html#expected-value-2-5",
  "type": "Worksheet Exercise",
  "number": "9.3",
  "title": "",
  "body": "  Find , where is the outcome when we roll a fair die.   "
},
{
  "id": "expected-value-3-1",
  "level": "2",
  "url": "expected-value.html#expected-value-3-1",
  "type": "Worksheet Exercise",
  "number": "9.4",
  "title": "",
  "body": "  We play a game where a fair coin is flipped and if a heads appear we get and if tails appears we pay . Let be the payment made on each game. What is the expected value of .   "
},
{
  "id": "expected-value-3-2",
  "level": "2",
  "url": "expected-value.html#expected-value-3-2",
  "type": "Worksheet Exercise",
  "number": "9.5",
  "title": "",
  "body": "  We play a game where a fair die is rolled. If it comes up you win , if it comes up or you win , otherwise you pay . What is the expected value of the game?   "
},
{
  "id": "thm-expected-value-properties",
  "level": "2",
  "url": "expected-value.html#thm-expected-value-properties",
  "type": "Theorem",
  "number": "9.2",
  "title": "Properties of Expected Value (B:2.2-1).",
  "body": " Properties of Expected Value (B:2.2-1)   If the mathematical expectation exists, then it satisfies the following properties:      where is a constant    If is a discrete random variable and is a constant, then     If and are constants and and are functions of , then       "
},
{
  "id": "expected-value-4-1",
  "level": "2",
  "url": "expected-value.html#expected-value-4-1",
  "type": "Worksheet Exercise",
  "number": "9.6",
  "title": "",
  "body": "   Proofs :   "
},
{
  "id": "expected-value-4-2",
  "level": "2",
  "url": "expected-value.html#expected-value-4-2",
  "type": "Worksheet Exercise",
  "number": "9.7",
  "title": "",
  "body": "  Let denote a random variable that takes on any of the values with pmf Compute directly and using Theorem 2.2-1.   "
},
{
  "id": "expected-value-5-1",
  "level": "2",
  "url": "expected-value.html#expected-value-5-1",
  "type": "Worksheet Exercise",
  "number": "9.8",
  "title": "",
  "body": "  A game is played where you toss a coin. If it comes up heads you get , if it comes up tails you pay . Let be the payment of the game (amount you win or lose).     What is the space of ?      What is the pmf of ?      What is ?      What does mean? Does the value you found make sense? Why?    "
},
{
  "id": "expected-value-5-2",
  "level": "2",
  "url": "expected-value.html#expected-value-5-2",
  "type": "Worksheet Exercise",
  "number": "9.9",
  "title": "",
  "body": "  Let denote a random variable that takes on any of the values with pmf Compute directly and using Theorem 2.2-1.   "
},
{
  "id": "expected-value-6-1",
  "level": "2",
  "url": "expected-value.html#expected-value-6-1",
  "type": "Worksheet Exercise",
  "number": "9.10",
  "title": "",
  "body": "  Suppose in a stack of lottery tickets, are winners. You reach in and grab two tickets at random. Let be the number of winning tickets. Find the space of , the pmf of and .     What is the space of ?      What is the pmf of ?      What is ?      What does mean? Does the value you found make sense? Why?    "
},
{
  "id": "expected-value-6-2",
  "level": "2",
  "url": "expected-value.html#expected-value-6-2",
  "type": "Worksheet Exercise",
  "number": "9.11",
  "title": "",
  "body": "  For these problems, make a guess for the expected value of the random variable . You do not need to show any work.     A CD has songs. You like of them and don't like of them. Play songs chosen at random and let be the number of songs that you like. Make a guess for .      A store has cartons of eggs. Four of these cartons contain cracked eggs. You grab five cartons of eggs at random without checking. Let be the number of cartons that contain cracked eggs. Make a guess for .    "
},
{
  "id": "expected-value-7-1",
  "level": "2",
  "url": "expected-value.html#expected-value-7-1",
  "type": "Worksheet Exercise",
  "number": "9.12",
  "title": "",
  "body": "  Suppose is a R.V. with a hypergeometric distribution. objects ( alike and alike) and suppose you choose at random. Then we know that so: We will compute .[See slides on Canvas page if you don't to take notes.]   "
},
{
  "id": "special-expected-values",
  "level": "1",
  "url": "special-expected-values.html",
  "type": "Worksheet",
  "number": "10",
  "title": "Special Mathematical Expectations (2.3) Part 1",
  "body": " Special Mathematical Expectations (2.3) Part 1   We'll start by recalling (or learning) some useful formulas.    The sum of the first numbers       One can check (use induction) that       Find the sum: (where ).  Start with a finite sum:        Mean   Let be a discrete random variable with space and with pmf .  The  , denoted , or just if the context is clear, is just the expected value of        Variance   Let be a discrete random variable with space and with pmf .  The of , denoted is the weighted mean of the square of the distance of each point in the space of to the mean:      Standard Deviation   Let be a discrete random variable with space and with pmf . The positive square root of the variance is the standard deviation of and is denoted by .      Note that because of the linear properties of expected value we get:           Let have uniform distribution on the space . Find the mean and variance of .      More generally suppose that has a uniform distribution on the first positive integers. The mean of is:        Recall that has a hypergeometric distribution in the situation where you are selecting objects at random without replacement from a set of objects composed of of one type and of another ( . is the number of objects of type .     We saw in the last section that       It can be shown (see book) that        Suppose you have a stack of lottery tickets of which are winners. You draw at random. Let be the number of winning tickets. Find .      Practice     Suppose is a discrete RV with pmf given by for . Find the mean and the variance of .      Suppose a fair, 12 sided die is rolled. Let be the top face. Find the mean and Variance of .      In a bowl of fun size candy, there are 15 Twix bars and 20 Snickers. I reach in and grab 5 candies at random. Let be the number of Twix. Find the mean and Variance of .     "
},
{
  "id": "special-expected-values-2-2",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-2-2",
  "type": "Worksheet Exercise",
  "number": "10.1",
  "title": "",
  "body": "  The sum of the first numbers    "
},
{
  "id": "special-expected-values-2-3",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-2-3",
  "type": "Worksheet Exercise",
  "number": "10.2",
  "title": "",
  "body": "  One can check (use induction) that    "
},
{
  "id": "special-expected-values-2-4",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-2-4",
  "type": "Worksheet Exercise",
  "number": "10.3",
  "title": "",
  "body": "  Find the sum: (where ).  Start with a finite sum:    "
},
{
  "id": "def-mean",
  "level": "2",
  "url": "special-expected-values.html#def-mean",
  "type": "Definition",
  "number": "10.1",
  "title": "Mean.",
  "body": " Mean   Let be a discrete random variable with space and with pmf .  The  , denoted , or just if the context is clear, is just the expected value of     "
},
{
  "id": "special-expected-values-3-2",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-3-2",
  "type": "Worksheet Exercise",
  "number": "10.4",
  "title": "",
  "body": "  Variance   Let be a discrete random variable with space and with pmf .  The of , denoted is the weighted mean of the square of the distance of each point in the space of to the mean:    "
},
{
  "id": "def-standard-deviation",
  "level": "2",
  "url": "special-expected-values.html#def-standard-deviation",
  "type": "Definition",
  "number": "10.3",
  "title": "Standard Deviation.",
  "body": " Standard Deviation   Let be a discrete random variable with space and with pmf . The positive square root of the variance is the standard deviation of and is denoted by .   "
},
{
  "id": "special-expected-values-3-4",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-3-4",
  "type": "Worksheet Exercise",
  "number": "10.5",
  "title": "",
  "body": "  Note that because of the linear properties of expected value we get:      "
},
{
  "id": "special-expected-values-4-1",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-4-1",
  "type": "Worksheet Exercise",
  "number": "10.6",
  "title": "",
  "body": "  Let have uniform distribution on the space . Find the mean and variance of .   "
},
{
  "id": "special-expected-values-4-2",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-4-2",
  "type": "Worksheet Exercise",
  "number": "10.7",
  "title": "",
  "body": "  More generally suppose that has a uniform distribution on the first positive integers. The mean of is:   "
},
{
  "id": "special-expected-values-5-1",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-5-1",
  "type": "Worksheet Exercise",
  "number": "10.8",
  "title": "",
  "body": "  Recall that has a hypergeometric distribution in the situation where you are selecting objects at random without replacement from a set of objects composed of of one type and of another ( . is the number of objects of type .     We saw in the last section that       It can be shown (see book) that     "
},
{
  "id": "special-expected-values-5-2",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-5-2",
  "type": "Worksheet Exercise",
  "number": "10.9",
  "title": "",
  "body": "  Suppose you have a stack of lottery tickets of which are winners. You draw at random. Let be the number of winning tickets. Find .   "
},
{
  "id": "special-expected-values-6-2",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-6-2",
  "type": "Worksheet Exercise",
  "number": "10.10",
  "title": "",
  "body": "  Suppose is a discrete RV with pmf given by for . Find the mean and the variance of .   "
},
{
  "id": "special-expected-values-6-3",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-6-3",
  "type": "Worksheet Exercise",
  "number": "10.11",
  "title": "",
  "body": "  Suppose a fair, 12 sided die is rolled. Let be the top face. Find the mean and Variance of .   "
},
{
  "id": "special-expected-values-6-4",
  "level": "2",
  "url": "special-expected-values.html#special-expected-values-6-4",
  "type": "Worksheet Exercise",
  "number": "10.12",
  "title": "",
  "body": "  In a bowl of fun size candy, there are 15 Twix bars and 20 Snickers. I reach in and grab 5 candies at random. Let be the number of Twix. Find the mean and Variance of .   "
},
{
  "id": "moment-generating-function",
  "level": "1",
  "url": "moment-generating-function.html",
  "type": "Worksheet",
  "number": "11",
  "title": "The Moment Generating Function | Special Mathematical Expectations (2.3) Part 2",
  "body": " The Moment Generating Function | Special Mathematical Expectations (2.3) Part 2    Moment Generating Function (B:2.3-1)   Let be a discrete R.V. with space and pmf . If there exists a positive number such that exists and is finite for (interval around zero), then is called the moment generating function of (mgf) .    Suppose your sample space is . Then Therefore the coefficient of is .     Example 1 : Suppose is a RV with the following moment generating function. Find the pmf.          Example 2 : Suppose is a RV with the following moment generating function. Find the pmf.          Neat little trick with Moment Generating Functions : Using the theory of Laplace Transforms, it is known that if exists for then the derivative of  exists when Let's look at two of these derivatives.                   Summary:         Back to Example 1 where had the mgf below. Let's use the moment generating function to find :           Roll a fair die. Let be the number of trials needed until we see the first six. Let us denote by a success (rolling a ) and be a failure (rolling anything other than a ).  What is the space of ? What is the pmf? What is the mgf?      Suppose the pmf of a random variable is   where   Then is said to have a distribution.        Suppose has a geometric distribution with pmf Then the mgf of , and are:       The geometric distribution has some convenient formulas that are worth noting:      Sue keeps practicing basketball but never improves. The probability that Sue makes a basket is always 0.2. Let be the number of shots it takes until Sue makes a basket.     How is distributed?      What is the pmf of ?      How many shots do you expect Sue to take before she makes her first basket?      What is the probability that Sue makes her first basket on her 4th shot?      What is the probability that it takes no more than 8 shots before Sue makes her first basket?      What is the probability that it takes at least 10 shots before Sue makes her first basket?       A random variable has space and pmf given by .     What is the moment generating function for ?      Use the mgf to find the mean and variance of .       An electronic math placement tests consists of all multiple choice questions with 4 choices. The assessment continues as long as the person gets the correct answer. That is, it ends when the person gets the first wrong answer. A person is taking the test by randomly guessing answers. Let be the number of the question the person first gets wrong.     Find the pmf of .      What is the probability that is 3?      What is the probability that is at least 4?      What is the probability that is no more than 6?     "
},
{
  "id": "def-moment-generating-function",
  "level": "2",
  "url": "moment-generating-function.html#def-moment-generating-function",
  "type": "Definition",
  "number": "11.1",
  "title": "Moment Generating Function (B:2.3-1).",
  "body": " Moment Generating Function (B:2.3-1)   Let be a discrete R.V. with space and pmf . If there exists a positive number such that exists and is finite for (interval around zero), then is called the moment generating function of (mgf) .   "
},
{
  "id": "moment-generating-function-2-3",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-2-3",
  "type": "Worksheet Exercise",
  "number": "11.1",
  "title": "",
  "body": "   Example 1 : Suppose is a RV with the following moment generating function. Find the pmf.    "
},
{
  "id": "moment-generating-function-3-1",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-3-1",
  "type": "Worksheet Exercise",
  "number": "11.2",
  "title": "",
  "body": "   Example 2 : Suppose is a RV with the following moment generating function. Find the pmf.    "
},
{
  "id": "moment-generating-function-4-1",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-4-1",
  "type": "Worksheet Exercise",
  "number": "11.3",
  "title": "",
  "body": "   Neat little trick with Moment Generating Functions : Using the theory of Laplace Transforms, it is known that if exists for then the derivative of  exists when Let's look at two of these derivatives.                   Summary:    "
},
{
  "id": "moment-generating-function-5-1",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-5-1",
  "type": "Worksheet Exercise",
  "number": "11.4",
  "title": "",
  "body": "  Back to Example 1 where had the mgf below. Let's use the moment generating function to find :      "
},
{
  "id": "moment-generating-function-6-1",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-6-1",
  "type": "Worksheet Exercise",
  "number": "11.5",
  "title": "",
  "body": "  Roll a fair die. Let be the number of trials needed until we see the first six. Let us denote by a success (rolling a ) and be a failure (rolling anything other than a ).  What is the space of ? What is the pmf? What is the mgf?   "
},
{
  "id": "def-geometric",
  "level": "2",
  "url": "moment-generating-function.html#def-geometric",
  "type": "Definition",
  "number": "11.2",
  "title": "",
  "body": "  Suppose the pmf of a random variable is   where   Then is said to have a distribution.   "
},
{
  "id": "moment-generating-function-7-1",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-7-1",
  "type": "Worksheet Exercise",
  "number": "11.6",
  "title": "",
  "body": "  Suppose has a geometric distribution with pmf Then the mgf of , and are:   "
},
{
  "id": "moment-generating-function-8",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-8",
  "type": "Worksheet Exercise",
  "number": "11.7",
  "title": "",
  "body": "  The geometric distribution has some convenient formulas that are worth noting:   "
},
{
  "id": "moment-generating-function-9",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-9",
  "type": "Worksheet Exercise",
  "number": "11.8",
  "title": "",
  "body": "  Sue keeps practicing basketball but never improves. The probability that Sue makes a basket is always 0.2. Let be the number of shots it takes until Sue makes a basket.     How is distributed?      What is the pmf of ?      How many shots do you expect Sue to take before she makes her first basket?      What is the probability that Sue makes her first basket on her 4th shot?      What is the probability that it takes no more than 8 shots before Sue makes her first basket?      What is the probability that it takes at least 10 shots before Sue makes her first basket?    "
},
{
  "id": "moment-generating-function-10",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-10",
  "type": "Worksheet Exercise",
  "number": "11.9",
  "title": "",
  "body": "  A random variable has space and pmf given by .     What is the moment generating function for ?      Use the mgf to find the mean and variance of .    "
},
{
  "id": "moment-generating-function-11",
  "level": "2",
  "url": "moment-generating-function.html#moment-generating-function-11",
  "type": "Worksheet Exercise",
  "number": "11.10",
  "title": "",
  "body": "  An electronic math placement tests consists of all multiple choice questions with 4 choices. The assessment continues as long as the person gets the correct answer. That is, it ends when the person gets the first wrong answer. A person is taking the test by randomly guessing answers. Let be the number of the question the person first gets wrong.     Find the pmf of .      What is the probability that is 3?      What is the probability that is at least 4?      What is the probability that is no more than 6?    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
